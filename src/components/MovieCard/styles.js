import styled from "styled-components"

export const Container = styled.li `
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   min-height: 20rem;
   width: 100rem;
   padding: 3.2rem;
   gap: 0.8rem 1.5rem 1.5rem;
   border-radius: 1.6rem;
   background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  
   > h1 {
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: 0.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
   }

   > p {
    
      font-size: 1.6rem;
      margin: 2rem 0;
      text-align: justify;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
   }
`
export const ListTags = styled.ul`
   display: flex;
   text-decoration: none;
   list-style-type: none;
`