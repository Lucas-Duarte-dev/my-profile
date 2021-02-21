import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './style/theme'
import { Container, ContainerTechs, GlobalStyles } from './style/global'
import { ContainTechs, Instagram, Git, Facebook, Linkedin, Css, Html, ReactJs, Javascript, Node} from './style/techs'

import Techs from './components/Techs';
import Profile from './components/Profile';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Profile>
          <ContainTechs> <Css /></ContainTechs>
          <ContainTechs> <Html /></ContainTechs>
          <ContainTechs> <Javascript /></ContainTechs>
          <ContainTechs> <ReactJs /></ContainTechs>
          <ContainTechs> <Node /></ContainTechs>
        </Profile>
      
        <ContainerTechs>
          <Techs href="https://www.linkedin.com/in/lucas-duarte-ab65051b7/"> <Linkedin /> </Techs>
          <Techs href="https://github.com/Lucas-Duarte-dev"> <Git /> </Techs>
          <Techs href="https://www.instagram.com/lucas_duar32/"> <Instagram /> </Techs>
          <Techs href="https://www.facebook.com/profile.php?id=100026467400756"> <Facebook /> </Techs>
        </ContainerTechs>
      </Container>
    </ThemeProvider>
  );
}

export default App;
