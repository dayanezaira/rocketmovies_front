import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    color: ${({theme}) => theme.COLORS.WHITE_100};
    background-color: ${({theme, isNew}) => !isNew ? theme.COLORS.BACKGROUND_700 : "none"};
    border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

    > button {
        border: none;
        background:none;
        color: ${({theme}) => theme.COLORS.PINK_100};
        font-size: 2rem;
        padding-right: 1.6rem;
    }

    > input {
    
        height:5.6rem;
        padding: 1.6rem;
        border: none;
        border-radius: 0.8rem;
        color: ${({theme}) => theme.COLORS.WHITE_100};
        background-color: ${({theme, isNew}) => !isNew ? theme.COLORS.BACKGROUND_700 : theme.COLORS.BACKGROUND_900};

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300} ;
        }
    } 

`