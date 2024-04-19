import {Container, Menu, Content} from './styles'
import { Header } from './../../components/Header'
import { MovieCard } from '../../components/MovieCard'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import { api } from '../../services/api'
import { FiAlertTriangle } from "react-icons/fi";

export function Home(){
    const [notes, setNotes] = useState([])
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    async function getNotes(title = '') {
        try {
            const response = await api.get(`/users/movies_notes?title=${inputValue || title}`)
            setNotes(response.data)
           
           } catch (error) {
                if(error.response){
                    alert(error.response.data.message)
                } else {
                    alert('Não foi encontrada nenhuma nota!')
                }
           }
    }

    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        getNotes()
       
    }, [])


    return(
        <Container>
            <Header inputValueCallback={setInputValue}/>
            <main>
                <Menu>
                    <h1>Meus filmes</h1>
                    <Link to="/new">+ Adicionar filme</Link>
                </Menu>
                <Content>
                    { notes.length ? (notes.map(note => (
                        <Link to={`/moviedetails/${note.id}`}>
                            <MovieCard data={{ title: note.title, text: note.description, points: note.rating, tags: note.tags.map(tag => tag.name) }} key={note.id} onClick={() => handleDetails(note.id)}/>
                        </Link>
                    ))):
                    <div>
                        <h2>Caixa Vazia. Adicione seu filme!</h2>
                        <FiAlertTriangle/>
                    </div>
                    }
                </Content>
            </main>
        </Container>
    )
}