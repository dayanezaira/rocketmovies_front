import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    border: none;
    color: ${({theme}) =>theme.COLORS.GRAY_300};

    > input {
        height: 5rem;
        width: 100%;
        padding-left: 5rem;
        border: none;
        border-radius: 1rem;
        background: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

        &::placeholder {  
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    > svg {
        margin-left: 1.6rem;
        position: absolute; 
        z-index: 1; 
    }
`