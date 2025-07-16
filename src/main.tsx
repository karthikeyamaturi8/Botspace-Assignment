import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider as MaterialThemeProvider, createTheme as muiCreateTheme, THEME_ID } from '@mui/material/styles';
import './index.css';
import App from './App.tsx';
import { theme as chakraTheme } from "./theme.tsx"
const materialTheme = muiCreateTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={chakraTheme} >
      <MaterialThemeProvider theme={{ [THEME_ID]: materialTheme }}>
        <App />
      </MaterialThemeProvider>
    </ChakraProvider>
  </StrictMode>,
)
