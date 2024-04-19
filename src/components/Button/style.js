import styled from "styled-components"

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    width: 100%;
    font-weight: 500;
    margin-top: 2.4rem;
    border-radius: 1rem;
    border: 0;
    background-color: ${({theme}) => theme.COLORS.PINK_100};

    &:disabled {
        opacity: 0.5;
}
`
