import React from 'react';
import { Container, ContentImage, Image, Bio, Description, Content, Loading } from './style';
import Divisor from '../Divisor';
import { useFetch } from '../../hook/useFetch';
import myImage from '../../assets/my-image.jpg';




export default function Profile({ children }) {
    const { data } = useFetch('Lucas-Duarte-dev');
    
    if(!data) {
        return <Loading><p>Carregando...</p></Loading>
    }
    return (
        <Container>
            <ContentImage>
                <Image src={data.avatar_url === undefined ? myImage : data.avatar_url} alt="my"/>
            </ContentImage>
            <Divisor />
            <Content>
                {children}
            </Content>
                <Bio>
                    <Description>{data.bio}</Description>
                </Bio>
        </Container>
    );
}