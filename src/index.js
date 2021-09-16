import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/Header';
import History from './components/History/History';
import Bands from './components/Bands/Bands';
import './index.css';

ReactDOM.render(
    <>
    <Header />
    <History />
    <Bands />
    </>,
    document.getElementById('root')
    
)