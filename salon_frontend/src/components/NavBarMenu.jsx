import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from "./NavStyled";

const NavBarMenu = () => {
    return (
        <div>
            <Nav>
                <NavMenu>
                    <NavLink>
                        <h1>Hola mundo</h1>
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    )
}

export default NavBarMenu