import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/Header';
import History from './components/History/History';
import Bandas from './components/Bandas/Bandas';
import './index.css'

ReactDOM.render(
    <>
    <Header />
    <History />
    <Bandas />
    </>,
    document.getElementById('root')
    
)