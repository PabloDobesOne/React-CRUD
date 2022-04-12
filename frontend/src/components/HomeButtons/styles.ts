import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    width: 25rem;
    height: 10rem;
    margin: 2rem auto;
    padding: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    font-size: 2rem;
    font-weight: 500;
    text-transform: uppercase;

    background: var(--purple);
    color: var(--white);

    border: none;
    border-radius: 4px;

    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.4);

    transition: all .3s ease;

    &:hover {
        transform: translateY(-7px);
    }   

    svg {
        margin-right: 1rem;
        font-size: 2.5rem;
    }

    @media screen and (max-width: 470px) {
        width: 100%;
        flex-direction: column;
    }

`;