import React from 'react';

import { Container } from './styles';

function FormInput({height = '200px', width = '200px', placeholder = "Email", icon, type = "text", onChange}) {
  return (
    <Container height={height} width={width}>
         {icon}
        <input type={type} placeholder={placeholder} onChange={e => onChange(e.target.value)}></input>
    </Container>
  );
}

export default FormInput;