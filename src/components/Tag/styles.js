import styled from "styled-components"

export const Container = styled.span`
    font-size: 1.2rem;
    line-height: 1.4rem;
    border-radius: 0.8rem;
    padding: 0.5rem 1.6rem;
    margin-right: 0.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE_300};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
`; 