import React from 'react';
import {Title, Tech, Link, Container} from './style';

export default function Techs({href, children}) {
    return (
        <Container>
            <Tech>{children}</Tech>
            <Link>
                <Title target="_blank" href={href}>Clique para acessar</Title>
            </Link>
        </Container>
    );
} 