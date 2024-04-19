import { Container } from "./styles.js"

export function ButtonText({title, ...rest}) {
    return(
        <Container type="button" {...rest} onClick={onClick}>
            {title}
        </Container>
    )
}