import styled from 'styled-components'
import backgroundImg from '../../assets/image1.png'

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
    width: 100%;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: auto 13rem;
   
    > h1 {
        font-size: 4.6rem;
        color: ${({theme}) =>theme.COLORS.PINK_100};
    }

    > p {
        font-size: 1.4rem;
        margin-bottom: 4.8rem;
        color:${({theme}) =>theme.COLORS.GRAY_200};
    }

    > h2 {
        font-size: 2.2rem;
        margin-bottom: 4.8rem;
        color:${({theme}) => theme.COLORS.WHITE_200};
    }

    .box {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        width: 100%;
    }

    > a {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-size: 1.6rem;
        margin: auto;
        padding: 4.2rem 0 0;
        color: ${({theme}) => theme.COLORS.PINK_100};
   }
`
export const Background = styled.div` 
    flex: 1; 
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 0.4;
`