import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
`;

export const ContentImage = styled.div`
    width: 100%;
    height: 30rem;
    border-radius: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-image: url('https://3.bp.blogspot.com/-1-EI-hYRRqc/Xd2zFunH65I/AAAAAAAARyU/9lC8yiPTk04zG8t5lIbIc3A-tIwqKxBvwCLcBGAsYHQ/w914-h514-p-k-no-nu/sunrise-illustration-digital-art-uhdpaper.com-4K-4.1963-wp.thumbnail.jpg');
    background-size: cover;
    background-position: top;
`;

export const Image = styled.img`
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    object-fit: cover;
    margin: 2rem;
`;

export const Bio = styled.div`
    width: 60%;
    background: #222;
    border-radius: 0.5rem;
    padding: 1.2rem 0.8rem;
`;

export const Description = styled.span`
    color: ${({theme}) => theme.color.color};
    line-height: 1.5;
`;

export const Content = styled.div`
    width: 100%;
    margin: 1.3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div + div {
        margin-left: 1rem;
    }
`;

export const Loading = styled.div`
    height: 100vw;
    position: absolute;
    top: 0;
    left: 0; 
    bottom: 0;
    right: 0;
    background: ${({theme}) => theme.color.primaryBg};
    color: ${({theme}) => theme.color.color};
    z-index: 2000;
`;