import styled, { css } from 'styled-components';
import { FaNodeJs, FaFacebook, FaReact, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const ContainTechs = styled.div`
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.6rem;
    overflow: hidden;
`;

const icons = css`
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 0.8rem;
`;

export const Node = styled(FaNodeJs)`
    ${icons}
    background-color: #68a063;
`;

export const Javascript = styled(FaJs)`
    ${icons}
    background-color: #f0db4f;
`;

export const Html = styled(FaHtml5)`
    ${icons}
    background-color: #e02c1c;
`;

export const Css = styled(FaCss3Alt)`
    ${icons}
    background-color: #246de0;
`;

export const ReactJs = styled(FaReact)`
    ${icons}
    background-color: #16c8f2;
`;

export const Git = styled(FaGithub)`
    ${icons}
    background-color: #333333;
`;

export const Facebook = styled(FaFacebook)`
    ${icons}
    background-color: #62a4da;
`;

export const Instagram = styled(FaInstagram)`
    ${icons}
    background: linear-gradient(90deg, #5851DB, #E1306C);
`;

export const Linkedin= styled(FaLinkedin)`
    ${icons}
    background-color: #2867B2;
`;
