import styled from "styled-components";
import { darken } from 'polished';


export const Container = styled.header`
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background: var(--purple);
    color: var(--white);

    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 0 2rem;

    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.4);

`;

export const Menu = styled.ul`
    position: absolute;
    top: 4.1rem;
    left: -35rem;
    height: 100vh;

    list-style: none;
    background: var(--purple);
    border-radius: 0 3px 3px 0;

    padding: 1rem;
    transition: all .3s ease;

    box-shadow: 3px 0 7px rgba(0, 0, 0, 0.4);

    &.show {
        left: 0;
    }

    li {
        width: 12rem;

        & + li {
            margin-top: 0.5rem;
        }
    }

    li > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 1rem 0;

        background: ${darken(0.1, '#8257e6')};
        color: var(--white);
        border-radius: 3px;
        font-weight: bold;

        cursor: pointer;
        transition: all .2s ease;

        &:hover {
            background: var(--white);
            color: var(--purple);
            transform: translateY(-3px);
        }
    }

    @media screen and (max-width: 500px) {
        width: 100%;

        li {
            width: 100%;
        }
    }
`;


export const MenuBars = styled.div`
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.2rem;
    border-radius: 3px;
    background: var(--light-purple);

    cursor: pointer;
    transition: all .3s ease;

    .close-icon {
        color: var(--white);
        font-size: 2.5rem;
    }

    .bars-icon {
        
    }

    &:hover {
        background: var(--white);
        svg {
            color: var(--purple);
        }
    }
`;

export const Logo = styled.div`
    font-size: 1.5rem;
`;

