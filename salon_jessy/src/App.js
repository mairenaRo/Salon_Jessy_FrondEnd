import React from 'react';
import './App.css';
import NavBarMenu from './Components/NavBarElements';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBarMenu />
    </Router>
  );
}

export default App;
