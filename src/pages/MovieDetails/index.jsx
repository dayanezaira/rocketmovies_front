import {Container, Content, User} from "./style.js"
import { Header } from "../../components/Header/index.jsx"
import {Tag} from '../../components/Tag/index.jsx'
import { FaArrowLeft } from "react-icons/fa6"
import { Stars } from './../../components/Stars'
import { LuClock3 } from "react-icons/lu"
import {useState, useEffect} from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useAuth } from '../../hooks/auth'
import {api} from '../../services/api'


export function MovieDetails(){
  
  const [data, setData] = useState(null)
  const params = useParams()
  const {user} = useAuth();
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/users/movies_notes/${params.id}`)
      setData(response.data)
    }

    fetchNote();
  }, [params.id]);

  async function handleDelete() {
    const confirm = window.confirm("Tem certeza que deseja excluir a nota criada?")

    if(confirm) {
        await api.delete(`users/movies_notes/${params.id}`);
        navigate("/")
    }
}

  return(
    <Container>
      <Header />
      {
        data &&
          <main>
            <Content>
                <Link to="/"><FaArrowLeft/> Voltar</Link>
                
                <h1> {data.title} <Stars points={data.rating}/></h1>

                <User>
                    <img src={avatarUrl} alt="Foto do usuário" />
                    <span>{`Por : ${user.name}`}</span>
                    <strong><LuClock3 /> {data.created_at.split(' ')[0]} às {data.created_at.split(' ')[1]} </strong>
                </User>

                  {
                    data.tags &&
                    <div id="tags">
                      {
                        data.tags.map(tag => (
                        <Tag
                        key={String(tag.id)}
                        title={tag.name}/>))
                      }
                    </div>
                  }
                
                <p> {data.description}</p>

                
                <a onClick={handleDelete}> Excluir nota </a>
                
            </Content>
          </main>
      }
    </Container>
  )
}