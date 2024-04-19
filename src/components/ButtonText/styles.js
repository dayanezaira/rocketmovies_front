import styled from "styled-components"

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 1rem;
    font-size: 1.6rem;
    font-weight: 400;
    border: none;
    border-radius: 0.8rem;
    padding: 2.2rem;
    background-color: ${({theme}) => theme.COLORS.PINK_100};
`