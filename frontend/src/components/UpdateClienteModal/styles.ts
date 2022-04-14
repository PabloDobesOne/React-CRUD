import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        color: var(--black-900);
        font-size: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid var(--gray-400);
        font-weight: 400;
        font-size: 1rem;

        &:focus {
            color: var(--purple);
            border: none;
            outline: 1px solid var(--purple);
        }
    }

    button {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        transition: filter 0.2s ease;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media screen and (max-width: 430px) {
        h2 {
            text-align: center;
        }
    }
`;