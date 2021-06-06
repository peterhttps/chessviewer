import React from 'react';

import { Container } from './styles';

function FormInput({height = '200px', width = '200px', placeholder = "Email", icon}) {
  return (
    <Container height={height} width={width}>
         <i className="fa fa-user icon"></i>
        <input type="text" placeholder={placeholder}></input>
    </Container>
  );
}

export default FormInput;