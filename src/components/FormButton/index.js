import React from 'react';

import { Button } from './styles';

function FormButton({children, onClick}) {
  return (
    <Button onClick={onClick}>
        {children}
    </Button>
  );
}

export default FormButton;