import { Header } from './../../components/Header'
import { Container, Form } from "./styles"
import { FaArrowLeft } from "react-icons/fa6";
import { Button } from './../../components/Button'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { NoteItem } from './../../components/NoteItem'
import { Link } from 'react-router-dom';
import { useState } from "react";
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom';

export function New() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote() {
        await api.post("/users/movies_notes", {
            title,
            description,
            rating,
            tags
        })

        alert("Nota criada com sucesso!")
        navigate("/")
    }

    async function handleDelete() {
        const confirm = window.confirm("Tem certeza que deseja excluir a nota criada?")

        navigate("/")
    }

    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <Link to="/"><FaArrowLeft/>Voltar</Link>
                        <h1>Novo filme</h1>
                    </header>

                    <div className="boxInput">

                        <input type="text" placeholder="Título" onChange={e => setTitle(e.target.value)}/>

                        <input type="number" min="0" max="5" maxLength="1" placeholder="Sua nota (de 0 a 5)" onChange={e => setRating(e.target.value)}/>

                    </div>

                    <Textarea placeholder="Observações" className="textarea" onChange={e => setDescription(e.target.value)}/>

                    <Section title="Marcadores">

                        <div className='tags'>
                            {
                                tags.map((tag, index) => (
                                <NoteItem 

                                key={String(index)}
                                value={tag} 
                                onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }
                            
                            <NoteItem 

                            value={newTag} 
                            isNew={true} 
                            onChange={e => setNewTag(e.target.value)} 
                            onClick={handleAddTag}
                            
                            />
                        </div>
                        
                    </Section>

                    <div className="buttons">

                        <Button title="Excluir filme" onClick={handleDelete}/>

                        <Button title="Salvar alterações" onClick={handleNewNote}/>

                    </div>

                </Form>
            </main>        
        </Container>
    )
}