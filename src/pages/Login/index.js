import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { Container, Wrapper, LoginBox, FormArea, LogoContainer } from './styles';

import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

import loginImage from '../../assets/images/loginImage.jpg';
import Logo from '../../components/Logo';
import { loginUser } from '../../services/user';

function Login() {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { data, status } = await loginUser(email, password);

    if (status === 200) {
      localStorage.setItem("token", "Bearer ".concat(data.token));
      history.push('/');
    }
  }

  return (
    <Wrapper>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Container>
          <LoginBox>
            <FormArea>
              <h1>Login</h1>
              <FormInput 
                width="230px" 
                height="30px" 
                placeholder="Email" 
                icon={<i class="fa fa-envelope-o" aria-hidden="true"></i>}
                onChange={setEmail}
              />
              <FormInput 
                width="230px" 
                height="30px" 
                placeholder="Password"
                icon={<i class="fa fa-lock" aria-hidden="true"></i>}
                type="password"
                onChange={setPassword}
              />
              <FormButton onClick={() => handleLogin()}>Login</FormButton>

              <Link to="/register">Don’t have an account? Register now for free! &#x2192;</Link>
            </FormArea>
            <img src={loginImage} alt="login"/>
          </LoginBox>
        </Container>

    </Wrapper>
  );
}

export default Login;