import React from 'react';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { FullPageSlider } from './components/containers';

const theme = createTheme({
  palette: {
    white: {
      main: '#fff'
    },
    gray_clear: {
      main: '#999999',
      dark: '#666666'
    }
  }
})


theme.typography.h1 = {
  fontSize: 50,
  '@media (max-width:600px)': {
    fontSize: 40,
  }
}

theme.typography.h4 = {
  fontSize: 34,
  '@media (max-width:600px)': {
    fontSize: 30,
  }
}

theme.typography.h5 = {
  '@media (max-width:500px)': {
    fontSize: 16,

  }
}

theme.typography.p = {
  fontSize: 16,
  '@media (max-width:600px)': {
    fontSize: 12,
  },

}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <FullPageSlider/>
      </div>
    </ThemeProvider>
  );
}

export default App;
