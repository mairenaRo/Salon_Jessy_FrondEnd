import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavBarStyle';

const NavBarMenu = () => {
    return (
        <div>
            <Nav>
                <Bars>
                    <NavMenu>
                        <NavLink to="/inicio" activeStyle>
                            Inicio
                        </NavLink>
                        <NavLink to="/inicio" activeStyle>
                            Catalogo
                        </NavLink>
                        <NavLink to="/inicio" activeStyle>
                            Acerca de
                        </NavLink>
                        <NavBtn>
                            <NavBtnLink to='/sigin'>Iniciar Sesion</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </Bars>
            </Nav>
        </div>
    );
};

export default NavBarMenu;