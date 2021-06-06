import React from 'react';

import { Container } from './styles';

function FormInput({height = '200px', width = '200px', placeholder = "Email", icon, type = "text"}) {
  return (
    <Container height={height} width={width}>
         {icon}
        <input type={type} placeholder={placeholder} ></input>
    </Container>
  );
}

export default FormInput;