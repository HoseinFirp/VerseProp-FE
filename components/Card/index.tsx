import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Card = ({ title, children, sx, ...props }: any) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: 2,
        borderRadius: 2,
        marginBottom: 1,
        ...sx,
      }}
      {...props}
    >
      {title && (
        <Typography variant="body1" sx={{ m: 1, mb: 3 }}>
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
};

export default Card;
