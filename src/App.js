import React from 'react';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Navbar, Hero, Skills, Portfolio, Footer } from './components/containers';
import { Height } from '@mui/icons-material';

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
  '@media (max-width:600px)': {
    fontSize: 30,

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
        <nav id='nav'><Navbar/></nav>
        <section id='hero'><Hero/></section>
        <section id='skills'><Skills/></section>
        <section id='portfolio'><Portfolio/></section>
        <footer id='footer'><Footer/></footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
