import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Logo, Menu, MenuBars } from "./styles";

export function MenuBar() {
    const [isMenuActive, setIsMenuActive] = useState(false);



    return (
        <Container>
            <MenuBars onClick={() => { setIsMenuActive(!isMenuActive) }}/>
            <Menu className={isMenuActive ? 'show' : ''}>
                <li>
                    <Link 
                        to='/'
                        onClick={() => { setIsMenuActive(!isMenuActive) }}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/cidades'
                        onClick={() => { setIsMenuActive(!isMenuActive) }}
                    >
                        Cidades
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/clientes'
                        onClick={() => { setIsMenuActive(!isMenuActive) }}
                    >
                        Clientes
                    </Link>
                </li>
            </Menu>
            <Logo>
                React CRUD
            </Logo>
        </Container>
    );
}