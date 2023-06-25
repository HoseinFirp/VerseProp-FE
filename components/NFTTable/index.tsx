import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import Router from 'next/router';
import React from 'react';
import HideOnMobile from '../../helpers/HideOnMobile';
import Card from '../Card';

const NFTRow = ({ row, ...props }: any) => {
  return (
    <Card
      sx={{
        width: '100%',
        height: 70,
        marginTop: 1,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={() => Router.push(`nft/${row.id}`) }
      {...props}
    >
      <Typography variant="body1" sx={{ flex: 0.4, paddingLeft: 2 }}>
        {row}
      </Typography>
      <Box sx={{ flex: 2, display: 'flex', alignItems: 'center' }}>
        <Image
          src="/sector_icon.png"
          width="40"
          height="40"
          objectFit="contain"
        />
        <Typography variant="body1" sx={{ marginLeft: 2 }}>
          NFT Name
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ flex: 1 }}>
        10
      </Typography>
      <HideOnMobile>
        <Typography variant="body2" sx={{ flex: 1 }}>
          2 minutes ago
        </Typography>
      </HideOnMobile>
      <Typography variant="body1" color="success.main" sx={{ flex: 1 }}>
        Completed
      </Typography>
    </Card>
  );
};

const NFTTable = ({ rows }: any) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
      <Box
        sx={{
          width: '100%',
          height: 10,
          marginTop: 2,
          marginBottom: 1,
          display: 'flex',
        }}
      >
        <Typography variant="body2" sx={{ flex: 0.4, paddingLeft: 2 }}>
          #ID
        </Typography>
        <Typography variant="body2" sx={{ flex: 2 }}>
          Name
        </Typography>
        <Typography variant="body2" sx={{ flex: 1 }}>
          Offers
        </Typography>
        <HideOnMobile>
          <Typography variant="body2" sx={{ flex: 1 }}>
            Last updated
          </Typography>
        </HideOnMobile>
        <Typography variant="body2" sx={{ flex: 1 }}>
          Status
        </Typography>
      </Box>
      {rows.map((row: any, index: any) => (
        <NFTRow row={row} key={index}/>
      ))}
      <Box sx={{ margin: 5 }} />
    </Box>
  );
};

export default NFTTable;
