import dynamic from 'next/dynamic';
import { Typography, Container, Modal, Divider, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import Card from '../../components/Card';
import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';
import NFTTable from '../../components/NFTTable';
import Image from 'next/image';
import InputField from '../../components/InputField';
import Slide from '@mui/material/Slide';
import { CloseOutlined } from '@mui/icons-material';

const NFTPage = ({ slug }: any) => {
  const Lines = dynamic(() => import('../../components/LineChart'), {
    ssr: false,
  });
  const [showOfferModal, setShowOfferModal] = React.useState(false);
  const [showActivityModal, setShowActivityModal] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Container>
      <Box sx={{ display: 'flex', margin: 'auto', flexWrap: 'wrap' }}>
        <Box sx={{ flex: 1, marginTop: 2, margin: { md: 2 } }}>
          <Box
            sx={{
              backgroundColor: 'black',
              minWidth: 300,
              height: 300,
            }}
          />
        </Box>
        <Box sx={{ flex: 1, marginTop: 2, margin: { md: 2 }, minWidth: 400 }}>
          <Card>
            <Typography variant="subtitle1" color="primary.dark">
              Decentraland
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              Property Name
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, display: 'flex' }}>
              Owner
              <Typography
                variant="subtitle1"
                color="primary.dark"
                component="span"
                sx={{ marginLeft: 1 }}
              >
                0x....1234
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginLeft: 5, display: 'flex' }}
                component="span"
              >
                <VisibilityIcon
                  fontSize="small"
                  sx={{
                    verticalAlign: 'center',
                    marginRight: 0.5,
                  }}
                />
                10 views
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginLeft: 3, display: 'flex' }}
                component="span"
              >
                <FavoriteIcon
                  fontSize="small"
                  sx={{
                    verticalAlign: 'center',
                    marginRight: 0.5,
                  }}
                />
                20 favorite
              </Typography>
            </Typography>
          </Card>
          <Card>
            <Button onClick={() => setShowOfferModal(true)}>Send an offer</Button>
            <Button variant="outlined" onClick={() => setShowActivityModal(true)}>View activities</Button>
            <Button variant="outlined" sx={{ float: 'right' }}>
              Contact
            </Button>
          </Card>
          <Card>
            <ButtonGroup buttons={['Description', 'Properties', 'Details']} />
            <Typography
              variant="body2"
              sx={{
                marginTop: 3,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              By{' '}
              <Typography
                variant="subtitle1"
                color="primary.dark"
                component="span"
                sx={{ marginLeft: 1 }}
              >
                Decentraland
              </Typography>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: 3,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Extra large (XL) parcel in Sominum space has a size of 1500m2 and
              is available for rent.
            </Typography>
          </Card>
          <Card title="Price history">
            <Lines />
          </Card>
        </Box>
      </Box>
      <Card title="Offers">
        <ButtonGroup buttons={['All', 'Active', 'Expired']} />
        <NFTTable rows={[1, 2, 3, 4]} />
      </Card>


      <Modal
        open={showActivityModal}
        onClose={() => setShowActivityModal(false)}
      >
        <Slide in={showActivityModal} direction="left">
          <Box sx={{ backgroundColor: 'white', height: '100%', width: 500, float: 'right', p: 5 }}>
            <CloseOutlined sx={{ float: 'right', cursor: 'pointer' }} onClick={() => setShowActivityModal(false)} />
            <Typography variant="h5" sx={{ marginBottom: 2 }}>Activity</Typography>
            <Divider />
            <Box sx={{ height: '90%', display: 'flex', alignItems: 'center', flexDirection: 'column-reverse' }}>
              <Box sx={{ width: '90%', height: 60, border: '1px solid #ddd', borderRadius: 2, p: 3, position: 'relative' }}>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>You sent an offer</Typography>
                <Typography variant="body2" sx={{ marginBottom: 1, position: 'absolute', right: 15, bottom: 1 }}>12:34</Typography>
                <Typography variant="body2" color="primary" sx={{ marginBottom: 1, position: 'absolute', right: 15, top: 10 }}>View activity</Typography>
              </Box>
              <Box sx={{ width: '90%', height: 60, border: '1px solid #ddd', borderRadius: 2, p: 3, mb: 2, position: 'relative' }}>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>You sent an offer</Typography>
                <Typography variant="body2" sx={{ marginBottom: 1, position: 'absolute', right: 15, bottom: 1 }}>12:34</Typography>
                <Typography variant="body2" color="primary" sx={{ marginBottom: 1, position: 'absolute', right: 15, top: 10 }}>View activity</Typography>
              </Box>
            </Box>
          </Box>
        </Slide>
      </Modal>

      <Modal
        open={showOfferModal}
        onClose={() => setShowOfferModal(false)}
      >
        <Slide in={showOfferModal} direction="left">
          <Box sx={{ backgroundColor: 'white', height: '100%', width: 500, float: 'right', p: 5, position: 'absolute', right: 0 }}>
            <CloseOutlined sx={{ float: 'right', cursor: 'pointer' }} onClick={() => setShowOfferModal(false)} />
            <Stepper activeStep={activeStep} orientation="vertical">
              <Step key="step1">
                <StepLabel>
                  Price and period
                </StepLabel>
                <StepContent>
                  <Typography variant="h3">Send an offer</Typography>
                  <Divider sx={{ mt: 3 }} />
                  <Box sx={{ mt: 5, display: 'flex' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
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
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mr: 5 }}>
                      <Typography variant="body2">
                        Floor
                      </Typography>
                      <Typography variant="body1">
                        2.55
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                      <Typography variant="body2">
                        Medium price
                      </Typography>
                      <Typography variant="body1">
                        3.55
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="body1" sx={{ mt: 5 }}>
                      <InputField label="Enter Amount" placeHolder="0.01" fullWidth />
                      <InputField label="Offer expiration" placeHolder="3 days" fullWidth />
                      <Button sx={{ width: '97%', mt: 2 }} onClick={() => setActiveStep(1)}>Continue</Button>
                    </Typography>
                  </Box>
                </StepContent>
              </Step>

              <Step key="step2">
                <StepLabel>
                  Buyer
                </StepLabel>
                <StepContent>
                  <InputField label="Search a buyer" />
                  <Box>
                    <Typography variant="body1" sx={{ mt: 5 }}>
                      <Button sx={{ width: '97%', mt: 2 }} onClick={() => setActiveStep(0)}>Continue</Button>
                    </Typography>
                  </Box>
                </StepContent>
              </Step>
            </Stepper>
          </Box>
        </Slide>
      </Modal>
    </Container>
  );
};

export async function getServerSideProps({ params, req, query }: any) {
  return {
    props: {
      slug: query.slug,
    },
  };
}

export default NFTPage;
