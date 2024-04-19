import { Container, ListTags} from "./styles"
import { Tag } from "../Tag"
import { Stars } from '../Stars'

export function MovieCard({data, key}) {
    
    return(
        <Container key={key}>
            <h1>{data.title}</h1>
            <Stars points={data.points} />
            
            <p>{data.text}</p>

            <ListTags>
                { data?.tags?.map( tag => (<li key={tag}> <Tag title={tag}/></li>))}
            </ListTags>
        </Container>
    )
}