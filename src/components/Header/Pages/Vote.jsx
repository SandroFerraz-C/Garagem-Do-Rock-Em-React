import React from 'react';
import { Link } from 'react-router-dom';

const Vote = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/usuario">Usuario</Link>
          </li>
        </ul>
      </nav>
      <Link to="/">retornar a página inicial</Link>
    </div>
  );
}

export default Vote;