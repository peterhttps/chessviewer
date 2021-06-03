import React from 'react';
import { useHistory } from "react-router-dom";

import { Container } from './styles';

function Login() {
  const history = useHistory();

  return (
    <Container>
        <h1>Login</h1>
        <button onClick={() => history.push('/')}>IR PARA HOME</button>
    </Container>
  );
}

export default Login;