import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import { PortfolioHero } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PortfolioHero />
    </ThemeProvider>
  );
}

export default App;