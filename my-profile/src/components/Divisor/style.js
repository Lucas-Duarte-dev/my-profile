import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15rem;
    margin: 2rem 0;
    align-items: center;
    & > div {
        width: 100%;
        background-color: ${({theme}) => theme.color.margin};
        height: 0.1rem;
    }
`;