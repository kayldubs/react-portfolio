import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
// import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Footer />
      </main>
    </div>
  );
}

export default App;
