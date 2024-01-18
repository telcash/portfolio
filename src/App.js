import React from 'react';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Navbar, Hero, Skills, Portfolio, Footer } from './components/containers';

const theme = createTheme({
  palette: {
    white: {
      main: '#fff'
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <nav><Navbar/></nav>
        <section><Hero/></section>
        <section><Skills/></section>
        <section><Portfolio/></section>
        <footer><Footer/></footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
