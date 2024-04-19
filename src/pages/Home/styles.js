import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    grid-template-rows: 10rem auto;
    grid-template-areas: 
        "header"
        "content";

    > main {
      grid-area: content;
      align-items: center; 
      justify-content: center;
      padding: 6.4rem 0;

    ::-webkit-scrollbar {
      width: 0.8rem;
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_800}; 
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 0.8rem;
      background-color: ${({theme}) => theme.COLORS.PINK_100};
    }
  }
`

export const Menu = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 61rem; 
    margin-bottom: 3.7rem;
    
    > h1 {
      font-size: 3.2rem;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.WHITE_100};
    }

    > a {
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
      color: ${({theme}) => theme.COLORS.BACKGROUND_800};
      background-color: ${({theme}) => theme.COLORS.PINK_100};
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100rem;
    max-height: 50vh;
    gap: 2.4rem;
    margin: 0 auto;
    overflow-y: scroll;
    overflow-x: hidden;
`