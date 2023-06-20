import React from 'react';
import ButtonBase from '@mui/material/Button';

const Button = ({ children, variant, color, sx, ...rest }: any) => {
  return (
    <ButtonBase
      variant={variant || 'contained'}
      color={color || 'primary'}
      sx={{ margin: 1, textTransform: 'none', ...sx }}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;
