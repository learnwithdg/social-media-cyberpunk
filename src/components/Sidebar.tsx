import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Home,
  Person,
  Settings,
  Bookmark,
  Group,
  Storefront,
  Chat,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const CyberList = styled(List)({
  '& .MuiListItemButton-root': {
    borderRadius: '8px',
    marginBottom: '8px',
    '&:hover': {
      backgroundColor: 'rgba(0, 242, 255, 0.1)',
      '& .MuiListItemIcon-root': {
        color: '#00f2ff',
      },
      '& .MuiListItemText-primary': {
        color: '#00f2ff',
      },
    },
  },
  '& .MuiListItemIcon-root': {
    color: '#ffffff',
    minWidth: 40,
  },
  '& .MuiListItemText-primary': {
    color: '#ffffff',
    fontFamily: 'monospace',
  },
});

const menuItems = [
  { text: 'Home', icon: <Home /> },
  { text: 'Profile', icon: <Person /> },
  { text: 'Friends', icon: <Group /> },
  { text: 'Messages', icon: <Chat /> },
  { text: 'Marketplace', icon: <Storefront /> },
  { text: 'Bookmarks', icon: <Bookmark /> },
  { text: 'Settings', icon: <Settings /> },
];

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: 'none', sm: 'block' },
        backgroundColor: 'rgba(20, 20, 50, 0.8)',
        borderRadius: '12px',
        border: '1px solid #00f2ff',
        height: 'calc(100vh - 100px)',
        position: 'sticky',
        top: '70px',
      }}
    >
      <CyberList>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </CyberList>
    </Box>
  );
};

export default Sidebar; 