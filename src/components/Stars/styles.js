import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    > svg {
        height: 1.6rem;
        width: 1.6rem;
        color: ${({ theme }) => theme.COLORS.PINK_100};
    }
`;