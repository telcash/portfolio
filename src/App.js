import React from 'react';
import './App.css';

import { Navbar, Hero, Skills, Portfolio, Footer } from './components/containers';

const App = () => {
  return (
    <div className="App">
      <nav><Navbar/></nav>
      <section><Hero/></section>
      <section><Skills/></section>
      <section><Portfolio/></section>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
