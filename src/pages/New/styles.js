import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    min-height: 100vh;
    width: 100%;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: "header"
                         "content";

    main {
        grid-area: content;
        overflow-y: auto;
        margin-top: 2rem;
        margin-bottom: 4rem;
    }

        ::-webkit-scrollbar {
            width: 0.8rem;
            border-radius: 0.8rem;
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 0.8rem;
            background-color: ${({ theme }) => theme.COLORS.PINK_100};
        }
`
export const Form = styled.form`
    max-width: 100rem;
    margin: 0 auto;

    .tags {
        display: flex;
        flex-wrap: wrap;
        padding: 1.6rem;
    }

    > h2 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    margin: 4rem 0 2.4rem;
  }
   
   > header {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
       
        a, svg {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            font-size: 1.6rem;
            color: ${({theme}) =>theme.COLORS.PINK_100};
            margin-bottom: 2rem;
            margin-top: 2rem
        }

        h1 {
            font-size: 3.6rem;
            color: ${({theme}) =>theme.COLORS.WHITE_200};
            margin-bottom: 4rem;
        }
   }

   .boxInput {
        display: flex;
        gap: 4rem;

        input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
        }

        > input {
            height: 5.6rem;
            width: 53.6rem;
            flex: 1;
            padding-left: 2rem;
            border-radius: 1rem;
            border: none;
            color: ${({theme}) =>theme.COLORS.WHITE_200};
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700} 
        }
    }
    
    .textarea {
        width: 100%;
        min-height: 25rem;
        margin: 4rem 0;
        border-radius: 1rem;
        padding: 1.6rem;
        border: none;
        resize: none;
        color: #F4EDE8;
        background-color: #262529;
    }
    
    .buttons {
        display: flex;
        gap: 4rem; 
    }

    .buttons Button:first-child {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.PINK_100};
    }

`