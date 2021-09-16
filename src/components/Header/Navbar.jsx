import React from 'react';

import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './Index';


const Navbar = () => {
    return (

        <>
            <Nav>
                <NavLink to="/"><h1>Logo</h1></NavLink>
                <Bars />

                <NavMenu>
                    <NavLink to="/vote" activeStyle>
                        Vote
                    </NavLink>
                    <NavLink to="/classicos" activeStyle>
                    TOP 100 CLASSICOS DO ROCK (Com legenda em PT-BR)
                    </NavLink>
                    <NavLink to="/chat" activeStyle>
                    Chat da Galera!!
                    </NavLink>
                    <NavLink to="/sair" activeStyle>
                    Sair
                    </NavLink>

                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/singin">Sing In</NavBtnLink>
                </NavBtn>

            </Nav>

        </>
        
        
    )
}
export default Navbar;
