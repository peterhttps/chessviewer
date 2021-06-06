import React from 'react';

import { Container, LogoName, ColoredText } from './styles';

import chessPiece from '../../assets/images/ChessPiece.png';

function Logo() {
  return (
    <Container>
        <img src={chessPiece} alt="logo" draggable="false" />
        <LogoName>
            <ColoredText color="#8E5B3D" >Chess</ColoredText>
            <ColoredText color="#DFB995" >&nbsp; &nbsp; Viewer</ColoredText>  
        </LogoName>   
    </Container>
  );
}

export default Logo;