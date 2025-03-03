import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Avatar,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { LocalOffer, Campaign } from '@mui/icons-material';

const AdCard = styled(Card)({
  backgroundColor: 'rgba(20, 20, 50, 0.9)',
  borderRadius: '12px',
  border: '1px solid #00f2ff',
  marginBottom: '20px',
  position: 'relative',
  '&:hover': {
    boxShadow: '0 0 20px rgba(0, 242, 255, 0.4)',
  },
});

const SponsoredTag = styled(Box)({
  position: 'absolute',
  top: 10,
  right: 10,
  backgroundColor: 'rgba(0, 242, 255, 0.9)',
  color: '#0a0a1f',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

interface AdProps {
  type: 'sponsored' | 'adsense';
  data: {
    title: string;
    description: string;
    imageUrl: string;
    advertiser: string;
    avatarUrl?: string;
    link: string;
    price?: string;
  };
}

const Advertisement: React.FC<AdProps> = ({ type, data }) => {
  const handleClick = () => {
    // Track ad click
    console.log(`Ad clicked: ${data.title}`);
    window.open(data.link, '_blank');
  };

  return (
    <AdCard>
      <SponsoredTag>
        {type === 'sponsored' ? (
          <>
            <Campaign fontSize="small" />
            स्पॉन्सर्ड
          </>
        ) : (
          <>
            <LocalOffer fontSize="small" />
            विज्ञापन
          </>
        )}
      </SponsoredTag>

      <CardHeader
        avatar={
          <Avatar
            src={data.avatarUrl}
            sx={{ bgcolor: '#00f2ff', color: '#0a0a1f' }}
          >
            {data.advertiser[0]}
          </Avatar>
        }
        title={
          <Typography sx={{ color: '#00f2ff', fontWeight: 'bold' }}>
            {data.advertiser}
          </Typography>
        }
      />

      <CardMedia
        component="img"
        height="300"
        image={data.imageUrl}
        alt={data.title}
        sx={{ objectFit: 'cover' }}
      />

      <CardContent>
        <Typography
          variant="h6"
          sx={{ color: '#ffffff', mb: 1 }}
        >
          {data.title}
        </Typography>
        
        <Typography
          variant="body2"
          sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}
        >
          {data.description}
        </Typography>

        {data.price && (
          <Typography
            variant="h5"
            sx={{ color: '#00f2ff', mb: 2 }}
          >
            {data.price}
          </Typography>
        )}

        <Button
          variant="contained"
          fullWidth
          onClick={handleClick}
          sx={{
            backgroundColor: '#00f2ff',
            color: '#0a0a1f',
            '&:hover': {
              backgroundColor: '#00d4ff',
            },
          }}
        >
          {type === 'sponsored' ? 'अभी खरीदें' : 'और जानें'}
        </Button>
      </CardContent>
    </AdCard>
  );
};

export default Advertisement; 