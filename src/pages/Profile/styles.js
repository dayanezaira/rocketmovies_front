import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    > header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 14.4rem;
        padding: 0 12.4rem;
        background: ${({theme}) => theme.COLORS.BACKGROUND_600};

        a, svg {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            font-size: 1.6rem;
            color: ${({theme}) =>theme.COLORS.PINK_100};
        }
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 34rem;
    margin: 3rem auto 0;
    gap: 1rem;

    > div:nth-child(4){
        margin-top: 2.4rem;
    } 
`

export const Avatar = styled.div`
    width: 18.6rem;
    height: 18.6rem;
    position: relative;
    margin: -12.4rem auto 3.2rem;
    
    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.8rem;
        height: 4.8rem;
        position: absolute;
        bottom: 0.7rem;
        right: 0.7rem;
        background: ${({theme}) => theme.COLORS.PINK_100};
        border-radius: 50%;
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        }
    }
`