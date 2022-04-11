import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    width: 25rem;
    height: 10rem;
    margin: 2rem auto;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2rem;
    font-weight: 500;
    text-transform: uppercase;

    background: var(--purple);
    color: var(--white);

    border: none;
    border-radius: 4px;
    /* border-bottom: 5px solid red; */

    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.7);

    transition: all .3s ease;

    &:hover {
        transform: translateY(-7px);
    }   

`;