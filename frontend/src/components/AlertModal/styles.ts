import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        color: var(--black-900);
        font-size: 2rem;
        text-align: center;
    }

    .buttons {

        display: flex;
        gap: 1rem;

        button {
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
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

            &.button__yes {
                background: var(--green);
            }

            &.button__not {
                background: var(--red);
            }

        }

    }


`;