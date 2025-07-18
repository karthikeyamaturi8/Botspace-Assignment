import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider as MaterialThemeProvider, createTheme as muiCreateTheme, THEME_ID } from '@mui/material/styles';
import './index.css';
import App from './App.tsx';
const materialTheme = muiCreateTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MaterialThemeProvider theme={{ [THEME_ID]: materialTheme }}>
        <App />
      </MaterialThemeProvider>
  </StrictMode>,
)
