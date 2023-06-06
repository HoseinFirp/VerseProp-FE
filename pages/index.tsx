import { Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import NFTTable from '../components/NFTTable';
import ButtonGroup from '../components/ButtonGroup';

const Home = () => {
  return (
    <Container>
      {/* <Typography variant="body1">Dashboard</Typography> */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        <Box>
          <Image
            src="/v.png"
            layout="fixed"
            width="200"
            height="200"
            objectFit="contain"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            minWidth: 350,
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Box
              sx={{
                marginTop: 3,
                borderBottom: 1,
                borderColor: 'rgba(0, 0, 0, 0.1)',
                paddingBottom: 0.8,
                minWidth: 150,
              }}
            >
              <Typography variant="caption">New transactions</Typography>
              <Typography
                variant="body1"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                3,231
                <span
                  style={{
                    color: 'green',
                    fontSize: 12,
                    marginLeft: 10,
                    verticalAlign: 'center',
                  }}
                >
                  +3.4%
                </span>
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: 3,
                borderBottom: 1,
                borderColor: 'rgba(0, 0, 0, 0.1)',
                paddingBottom: 0.8,
                minWidth: 150,
              }}
            >
              <Typography variant="caption">New transactions</Typography>
              <Typography
                variant="body1"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                3,231
                <span
                  style={{
                    color: 'green',
                    fontSize: 12,
                    marginLeft: 10,
                    verticalAlign: 'center',
                  }}
                >
                  +3.4%
                </span>
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: 3,
                borderBottom: 1,
                borderColor: 'rgba(0, 0, 0, 0.1)',
                paddingBottom: 0.8,
                minWidth: 150,
              }}
            >
              <Typography variant="caption">New transactions</Typography>
              <Typography
                variant="body1"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                3,231
                <span
                  style={{
                    color: 'green',
                    fontSize: 12,
                    marginLeft: 10,
                    verticalAlign: 'center',
                  }}
                >
                  +3.4%
                </span>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                marginTop: 3,
                borderBottom: 1,
                borderColor: 'rgba(0, 0, 0, 0.1)',
                paddingBottom: 0.8,
                minWidth: 150,
              }}
            >
              <Typography variant="caption">New transactions</Typography>
              <Typography
                variant="body1"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                3,231
                <span
                  style={{
                    color: 'green',
                    fontSize: 12,
                    marginLeft: 10,
                    verticalAlign: 'center',
                  }}
                >
                  +3.4%
                </span>
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: 3,
                borderBottom: 1,
                borderColor: 'rgba(0, 0, 0, 0.1)',
                paddingBottom: 0.8,
                minWidth: 150,
              }}
            >
              <Typography variant="caption">New transactions</Typography>
              <Typography
                variant="body1"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                3,231
                <span
                  style={{
                    color: 'green',
                    fontSize: 12,
                    marginLeft: 10,
                    verticalAlign: 'center',
                  }}
                >
                  +3.4%
                </span>
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: 3,
                borderBottom: 1,
                borderColor: 'rgba(0, 0, 0, 0.1)',
                paddingBottom: 0.8,
                minWidth: 150,
              }}
            >
              <Typography variant="caption">New transactions</Typography>
              <Typography
                variant="body1"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                3,231
                <span
                  style={{
                    color: 'green',
                    fontSize: 12,
                    marginLeft: 10,
                    verticalAlign: 'center',
                  }}
                >
                  +3.4%
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Typography variant="body1" sx={{ marginTop: 8 }}>
        Latest updates
      </Typography>
      <ButtonGroup buttons={['All', 'In Progress', 'Completed']} />
      <NFTTable rows={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
    </Container>
  );
};

export default Home;
