import styled from "styled-components"

export const Container = styled.section`
   width: 100%;
   margin-bottom: 4rem; 

   > h2 {
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 2.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_500};

   } 
   
   > div {
      display: flex;
      flex-wrap: wrap;
      gap: 2.4rem;
      border-radius: 0.8rem;
      border: none;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`