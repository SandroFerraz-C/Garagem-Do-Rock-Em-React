import React from 'react';

import Header from './components/Header/Header';
import History from './components/History/History';
import Bands from './components/Bands/Bands';

import './index.css';
import './App.css';

const App = (props) => (
  <>
    <Header />
    <History />
    <Bands />
  </>
)

export default App;
