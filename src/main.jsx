import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';


const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: "Vazir",
    p: {
      fontSize: "18px",
      fontWeight: "400"
    },
    h1: {
      fontSize: '80px',
      fontWeight: 400
    },
    h2: {
      fontSize: '48px',
      fontWeight: 700
    },
    h3: {
      fontSize: '38px',
      fontWeight: 700
    },
    h4: {
      fontSize: '28px', // Adjust the font size for h4
      fontWeight: 700
    }
  },

  palette: {
    primary: {
      light: '#e1f5fc',
      main: '#4187ae',
      dark: '#113244',
      contrastText: '#fff',
    }
  },
});

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>,
)
