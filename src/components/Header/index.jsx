import { Container, Form, Profile} from "./styles";
import { useAuth } from "../../hooks/auth";
import { Link } from 'react-router-dom';
import {api} from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useNavigate } from "react-router-dom";


export function Header() {
    const {signOut, user} = useAuth()
    const navigate = useNavigate()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const handleInputValue = (e) => { inputValueCallback(e.target.value) }

    function handleSignOut() {
        signOut()
        navigate('/')
      }

    return(
        <Container>
            <p>RocketMovies</p>

            <Form>
                <form>
                    <label for="seacher">Pesquisar pelo título</label>
                    <input id="seacher" type="text" placeholder="Pesquisar pelo título" onChange={handleInputValue} />
                </form>
            </Form>

            <Profile>
                <Link to="/profile">
                    <img src={avatarUrl} alt={user.name} />
                </Link>
                <div>
                    <strong>{user.name}</strong>
                    <span>
                        <button type="button" onClick={handleSignOut}>Sair</button>
                    </span>
                </div>
            </Profile>
        </Container>
    )
}