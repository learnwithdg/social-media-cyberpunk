import React from 'react';
import {
  Box,
  Card,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Star,
  Verified,
  Palette,
  Speed,
  Storage,
  Support,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const PremiumCard = styled(Card)({
  backgroundColor: 'rgba(20, 20, 50, 0.8)',
  borderRadius: '12px',
  border: '1px solid #00f2ff',
  padding: '24px',
  marginBottom: '20px',
  boxShadow: '0 0 10px rgba(0, 242, 255, 0.2)',
  '&:hover': {
    boxShadow: '0 0 20px rgba(0, 242, 255, 0.4)',
  },
});

const plans = [
  {
    title: 'Basic',
    price: '₹499/month',
    features: [
      'Verified Profile Badge',
      'Ad-Free Experience',
      'Custom Theme Colors',
      'Priority Support',
    ],
    icon: <Star />,
  },
  {
    title: 'Pro',
    price: '₹999/month',
    features: [
      'All Basic Features',
      'Business Analytics',
      'Unlimited Storage',
      '24/7 Priority Support',
      'Custom Branding',
    ],
    icon: <Verified />,
  },
  {
    title: 'Enterprise',
    price: '₹4999/month',
    features: [
      'All Pro Features',
      'API Access',
      'Dedicated Account Manager',
      'Custom Integration',
      'Advanced Analytics',
    ],
    icon: <Storage />,
  },
];

const featureIcons = {
  'Verified Profile Badge': <Verified sx={{ color: '#00f2ff' }} />,
  'Ad-Free Experience': <Speed sx={{ color: '#00f2ff' }} />,
  'Custom Theme Colors': <Palette sx={{ color: '#00f2ff' }} />,
  'Priority Support': <Support sx={{ color: '#00f2ff' }} />,
  'Business Analytics': <Storage sx={{ color: '#00f2ff' }} />,
};

const Premium = () => {
  const handleSubscribe = (plan: string) => {
    // Here you can integrate payment gateway
    console.log(`Subscribing to ${plan} plan`);
    alert(`Thanks for choosing ${plan} plan! Payment gateway integration coming soon.`);
  };

  return (
    <Box p={3}>
      <Typography
        variant="h4"
        sx={{
          color: '#00f2ff',
          textAlign: 'center',
          marginBottom: 4,
          textShadow: '0 0 10px rgba(0, 242, 255, 0.5)',
        }}
      >
        Upgrade to Premium
      </Typography>

      <Grid container spacing={3}>
        {plans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.title}>
            <PremiumCard>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                {React.cloneElement(plan.icon, {
                  sx: { fontSize: 40, color: '#00f2ff', mb: 1 },
                })}
                <Typography
                  variant="h5"
                  sx={{ color: '#00f2ff', fontWeight: 'bold' }}
                >
                  {plan.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: '#ffffff', my: 2 }}
                >
                  {plan.price}
                </Typography>
              </Box>

              <List>
                {plan.features.map((feature) => (
                  <ListItem key={feature}>
                    <ListItemIcon>
                      {featureIcons[feature as keyof typeof featureIcons] || 
                        <Star sx={{ color: '#00f2ff' }} />}
                    </ListItemIcon>
                    <ListItemText
                      primary={feature}
                      sx={{ color: '#ffffff' }}
                    />
                  </ListItem>
                ))}
              </List>

              <Button
                variant="outlined"
                fullWidth
                sx={{
                  mt: 2,
                  color: '#00f2ff',
                  borderColor: '#00f2ff',
                  '&:hover': {
                    borderColor: '#00f2ff',
                    backgroundColor: 'rgba(0, 242, 255, 0.1)',
                  },
                }}
                onClick={() => handleSubscribe(plan.title)}
              >
                Subscribe Now
              </Button>
            </PremiumCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Premium; 