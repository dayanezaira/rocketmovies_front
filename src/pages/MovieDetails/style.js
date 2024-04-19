import styled from "styled-components"

export const Container = styled.div `
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: "header"
                         "content";

    ::-webkit-scrollbar {
        width: 0.8rem;
        border-radius: 0.8rem;
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
            border-radius: 0.8rem;
            background-color: ${({ theme }) => theme.COLORS.PINK_100};
        }

        main {
        grid-area: content;
        overflow-y: auto;
        margin-top: 2rem;
        margin-bottom: 4rem;
    }
`
export const Content = styled.div`
    max-width: 100rem;
    margin: 0 auto;
   
    #tags {
        margin: 4rem 0;
    }

    > button:first-child {
        align-self: flex-start;
    }

    > a, svg {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            font-size: 1.6rem;
            color: ${({theme}) =>theme.COLORS.PINK_100};
            margin-bottom: 2rem;
            margin-top: 2rem
        }

    > h1 {
        display: inline-flex;
        gap: 1.9rem;
        font-size: 3.6rem;
        color: ${({theme}) => theme.COLORS.WHITE_200};  
    }

    > p {
        font-size: 1.6rem;
        text-align: justify;
        color: ${({theme}) => theme.COLORS.WHITE_200};
    }
` 
export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    

    > img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 3.5rem;
        border: 1px solid #3E3B47;
    }

    > strong {
        display: flex;
        align-items: center;
    }

    > span, strong {
        font-size: 1.6rem;
        font-family: 'Roboto', 'serif';
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE_200};

        > svg {
            margin-right: 0.8rem;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

`