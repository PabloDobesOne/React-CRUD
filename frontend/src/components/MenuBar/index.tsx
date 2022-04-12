import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Logo, Menu, MenuBars } from "./styles";

import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { useCrud } from "../../contexts/CrudContext";

import ClickAwayListener from '@mui/base/ClickAwayListener'

export function MenuBar() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const { nameLogo } = useCrud();

    return (
        <ClickAwayListener
            onClickAway={()=> {setIsMenuActive(false)}}
        >
            <Container>
                <MenuBars 
                    onClick={() => { setIsMenuActive(!isMenuActive) }}
                >
                    {isMenuActive ? <IoMdClose className="close-icon"/> : <FaBars className="bars-icon"/>}
                </MenuBars>

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
                    {nameLogo}
                </Logo>
            </Container>
        </ClickAwayListener>
    );
}