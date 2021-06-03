import React from 'react';
import { useHistory } from "react-router-dom";

import { Container } from './styles';

function Home() {
  const history = useHistory();

  return (
    <Container>
        <h1>Home</h1>
        <button onClick={() => history.push('/viewer')}>IR PARA VIEWER</button>
        <button onClick={() => history.push('/login')}>IR PARA LOGIN</button>
    </Container>
  );
}

export default Home;