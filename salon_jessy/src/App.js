import React from 'react';
import NavBarElements from './components/NavBarElements';
import InicioElements from './components/InicioElements';
import Login from './components/Login';
import Footer from './components/Footer';
import ContactoElement from './components/ContactoElement';
import Element from './components/AgendarElement';

function App() {
  return (
    <div>
      <NavBarElements />
      <InicioElements />
      <Element/>
      <ContactoElement />
      <Login />
      <Footer />
    </div>
  )
}

export default App


