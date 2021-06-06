import React from 'react';

import { Button } from './styles';

function FormButton({children}) {
  return (
    <Button>
        {children}
    </Button>
  );
}

export default FormButton;