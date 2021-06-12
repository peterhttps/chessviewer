import React from 'react';
import { FiHome, FiSearch } from 'react-icons/fi';
import { useHistory } from "react-router-dom";

import Logo from '../Logo';

import { Container, IconArea, TabButton, HeaderButton } from './styles';

function Header() {
  const history = useHistory();

  return (
    <Container>
        <Logo />
        <IconArea>
            <TabButton>
                <FiHome color={"#F1E8DC"} size={24} />
            </TabButton>
            <TabButton>
                <FiSearch color={"#F1E8DC"} size={24} />
            </TabButton>
        </IconArea>
        <HeaderButton onClick={() => history.push('/login')}>
            Login
        </HeaderButton>
    </Container>
  
  );
}

export default Header;