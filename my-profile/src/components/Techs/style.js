import styled from 'styled-components';

export const Container = styled.div`
    width: 20rem;
    height: 8rem;
    background: ${({theme}) =>  theme.color.secundaryBg};
    padding: 1.3rem 2rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    margin: 2rem 1.2rem;
`;

export const Link = styled.div`
    margin: 0 0.9rem;
    cursor: pointer;
`;
export const Tech = styled.div`
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.6rem;
    overflow: hidden;
`;
export const Title = styled.a`
    color: ${({theme}) => theme.color.color};
    font-weight: bold;
    cursor: pointer;
    &:hover, &:focus {
        text-decoration: underline;
        color: ${({theme}) => theme.color.colorHover};
    }
`;