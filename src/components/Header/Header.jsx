import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <ul class="top-nav">
                <li><a href="vote.php">Vote na Sua banda Favorita</a></li>
                <li><a href="classic.php">TOP 100 CLASSICOS DO <span lang="en-US">ROCK</span> (Com legenda em PT-BR)</a></li>
                <li><a href="http://localhost:3030"><span lang="en-US">Chat</span> da Galera!!</a></li>
                <li><a href="sair.php">Sair</a></li>
            </ul>
        </div>
    )
}
export default Header
