import styled from "styled-components"

export const Container = styled.textarea`
    width: 100%;
    height: auto;
    margin: 4rem 0;
    border-radius: 1rem;
    padding: 1.6rem;
    border: none;
    resize: none;
    color: ${({theme}) =>theme.COLORS.WHITE_200};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  

    &::placeholder {
        color: ${({theme}) =>theme.COLORS.GRAY_600};
    }
`