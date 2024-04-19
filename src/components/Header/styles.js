import styled from "styled-components"
import { Link } from "react-router-dom"


export const Container = styled.div `
   grid-area: header;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 11.6rem;
   width: 100%;
   padding: 2.4rem 2rem; 
   gap: 7rem;
   border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_700};

   > p {
      color: ${({theme}) => theme.COLORS.PINK_100};
      font-size: 2.4rem;
      font-weight: 700;
   }
`

export const Form = styled.div`
   > form label {
      overflow: hidden;
      position: absolute;
      opacity: -1;
      border-radius: 1rem;
   }

   > form input {
      height: 5.6rem;
      width: 50rem;
      padding: 1.6rem 2.4rem;
      border: none;
      border-radius: 1rem;
      background: ${({theme}) => theme.COLORS.BACKGROUND_700};
      color: ${({theme}) => theme.COLORS.WHITE_300};
   }

   input::placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_300};
   }
`

export const Profile = styled(Link)`
   display: flex;
   align-items: center;
   flex-direction: row-reverse;
   gap: 0.9rem;

   a > img {
      width: 6rem;
      height: 6rem;
      border-radius: 3.5rem;
      border: 1px solid ${({theme}) => theme.COLORS.GRAY_700};
   }

   > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      strong {
         font-size: 1.4rem;
         font-weight: 700;
         text-align: right;
         width: 12.5rem;
         color: ${({theme}) => theme.COLORS.WHITE_200};
      }

      span button {
         font-size: 1.4rem;
         font-weight: 400;
         color: ${({theme}) => theme.COLORS.GRAY_300};
         background: transparent;
         border: none;
      }
   }
`