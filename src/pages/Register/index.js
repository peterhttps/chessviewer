import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Wrapper, LoginBox, FormArea, LogoContainer } from './styles';

import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

import registerImage from '../../assets/images/registerImage.jpg';
import Logo from '../../components/Logo';
import { registerUser } from '../../services/user';

function Register() {
  const history = useHistory();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = async () => {
    const { status } = await registerUser(email, nome, senha);
    if (status === 200) {
      toast.success('Usuário criado com sucesso', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

      setTimeout(() => {
        history.push("/login");
        
      }, 1500);
    }
  }

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
                icon={<i className="fa fa-user" aria-hidden="true"></i>}
                onChange={setNome}
              />
              <FormInput 
                width="230px" 
                height="30px" 
                placeholder="Email" 
                icon={<i className="fa fa-envelope-o" aria-hidden="true"></i>}
                onChange={setEmail}
              />
              <FormInput 
                width="230px" 
                height="30px" 
                placeholder="Password"
                icon={<i className="fa fa-lock" aria-hidden="true"></i>}
                type="password"
                onChange={setSenha}
              />
              <FormButton onClick={() => handleRegister()}>Register</FormButton>

              <Link to="/login">&#x2190; Have an account? Login here</Link>
            </FormArea>
          </LoginBox>
        </Container>
        <ToastContainer />
    </Wrapper>
  );
}

export default Register;