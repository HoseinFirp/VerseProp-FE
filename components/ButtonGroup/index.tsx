import Button from '@mui/material/Button';
import BaseButtonGroup from '@mui/material/ButtonGroup';
import React from 'react';

const ButtonGroup = ({ buttons, sx }: any) => {
  return (
    <BaseButtonGroup variant="contained" sx={{ marginTop: 2, ...sx }}>
      {buttons.map((button: any, index: any) => (
        <Button key={button} color={index === 0 ? 'primary' : 'secondary'}>
          {button}
        </Button>
      ))}
    </BaseButtonGroup>
  );
};

export default ButtonGroup;
