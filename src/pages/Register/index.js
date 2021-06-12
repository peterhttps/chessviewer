import React from 'react';
import { Link } from "react-router-dom";

import { Container, Wrapper, LoginBox, FormArea, LogoContainer } from './styles';

import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

import registerImage from '../../assets/images/registerImage.jpg';
import Logo from '../../components/Logo';

function Register() {
  return (
    <Wrapper>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Container>
          <LoginBox>
            <img src={registerImage} alt="login"/>
            <FormArea>
              <h1>Join now for <br/> Free!</h1>
              <FormInput 
                width="230px" 
                height="30px" 
                placeholder="Name" 
                icon={<i class="fa fa-user" aria-hidden="true"></i>}
              />
              <FormInput 
                width="230px" 
                height="30px" 
                placeholder="Email" 
                icon={<i class="fa fa-envelope-o" aria-hidden="true"></i>}
              />
              <FormInput 
                width="230px" 
                height="30px" 
                placeholder="Password"
                icon={<i class="fa fa-lock" aria-hidden="true"></i>}
                type="password"
              />
              <FormButton>Register</FormButton>

              <Link to="/login">&#x2190; Have an account? Login here</Link>
            </FormArea>
          </LoginBox>
        </Container>

    </Wrapper>
  );
}

export default Register;