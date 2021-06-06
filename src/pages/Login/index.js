import React from 'react';
import { Link } from "react-router-dom";

import { Container, Wrapper, LoginBox, FormArea, LogoContainer } from './styles';

import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

import loginImage from '../../assets/images/loginImage.jpg';
import Logo from '../../components/Logo';

function Login() {
  return (
    <Wrapper>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Container>
          <LoginBox>
            <FormArea>
              <h1>Login</h1>
              <FormInput width="230px" height="30px" placeholder="Email" />
              <FormInput width="230px" height="30px" placeholder="Password"/>
              <FormButton>Login</FormButton>

              <Link to="/register">Don’t have an account? Register now for free!</Link>
            </FormArea>
            <img src={loginImage} alt="login"/>
          </LoginBox>
        </Container>

    </Wrapper>
  );
}

export default Login;