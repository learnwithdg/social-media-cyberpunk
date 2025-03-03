import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Box,
} from '@mui/material';
import {
  Search as SearchIcon,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  background: 'linear-gradient(45deg, #0a0a1f 30%, #141432 90%)',
  borderBottom: '2px solid #00f2ff',
});

const SearchBar = styled('div')({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  marginRight: 2,
  marginLeft: 0,
  width: '100%',
  '@media (min-width: 600px)': {
    marginLeft: 3,
    width: 'auto',
  },
  border: '1px solid #00f2ff',
});

const SearchIconWrapper = styled('div')({
  padding: '0 16px',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#00f2ff',
});

const StyledInputBase = styled(InputBase)({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: '8px 8px 8px 0',
    paddingLeft: 'calc(1em + 32px)',
    width: '100%',
    '@media (min-width: 960px)': {
      width: '20ch',
    },
  },
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: '#00f2ff',
            textDecoration: 'none',
          }}
        >
          CYBER-SOCIAL
        </Typography>

        <SearchBar>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchBar>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={4} color="primary">
              <MailIcon sx={{ color: '#00f2ff' }} />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={17} color="primary">
              <NotificationsIcon sx={{ color: '#00f2ff' }} />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
            <AccountCircle sx={{ color: '#00f2ff' }} />
          </IconButton>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar; 