import React, { useState } from 'react';
import './App.css';
import { Box, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Premium from './components/Premium';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f2ff', // Cyberpunk neon blue
    },
    secondary: {
      main: '#ffffff', // White
    },
    background: {
      default: '#0a0a1f', // Dark blue background
      paper: '#141432', // Slightly lighter blue for cards
    },
    text: {
      primary: '#ffffff',
      secondary: '#00f2ff',
    },
  },
  typography: {
    fontFamily: '"Share Tech Mono", monospace',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

function App() {
  const [showPremium, setShowPremium] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        <Navbar />
        <Box sx={{ display: 'flex', padding: 2, gap: 2 }}>
          <Sidebar />
          {showPremium ? (
            <Premium />
          ) : (
            <>
              <Feed />
              <Button
                variant="contained"
                sx={{
                  position: 'fixed',
                  bottom: 20,
                  right: 20,
                  backgroundColor: '#00f2ff',
                  '&:hover': {
                    backgroundColor: '#00d4ff',
                  },
                }}
                onClick={() => setShowPremium(true)}
              >
                Upgrade to Premium
              </Button>
            </>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 