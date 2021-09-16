import React from 'react';

import { BrowserRouter as Router } from "react-router-dom";

import History from './components/History/History';
import Bands from './components/Bands/Bands';
import Navbar from './components/Header/Navbar';

import './index.css';
import './App.css';

const App = (props) => (
  <>
    
    <Router>
      <Navbar />
    </Router>
    <History />
    <Bands />
  </>
)

export default App;
