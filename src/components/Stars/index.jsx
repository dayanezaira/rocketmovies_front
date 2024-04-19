import { Container } from "./styles"
import { FaStar, FaRegStar } from 'react-icons/fa'

export function Stars({points, ...rest }) {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
        if(i <= points) {
            stars.push(<FaStar key={i} size={20}/>);
        } else {
            stars.push(<FaRegStar key={i} size={20}/>)
        }
    }

    return(
        <Container {...rest}>
            {stars}
        </Container>
    );
}