import styled from "styled-components";

export const Container = styled.div`
    margin: 7rem 2rem 2rem;
    padding: 2rem;

    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 500px){
        margin: 7rem 1rem 1rem;
        padding: 1rem;
    }
`;

export const InformationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        text-transform: uppercase;
        color: var(--purple);
    }

    button {
        height: 2.2rem;
        padding: 0 1rem;
        font-size: 1.2rem;
        text-transform: uppercase;
        color: var(--white);
        background: var(--purple);

        border: none;
        border-radius: 3px;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

        transition: all .2s ease;

        &:hover {
            transform: translateY(-3px);
        }

    }
`;

export const TableData = styled.table`
    margin: 2rem 0;
    width: 100%;

    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    border-spacing: 0;

    th {
        color: var(--purple);
        font-weight: 500;
        padding: 1rem 2em;
        text-align: left;
        text-transform: uppercase;
        line-height: 1.5rem;

        border-bottom: 1px solid #CCC;

        &:first-child {
            text-align: center;
        }

        &:last-child {
            text-align: center;
        }
    }

    tbody {

        tr {
            transition: all .2s ease;

            &:hover {
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
            }
        }

        td {
            padding: 1rem 2rem;
            border-bottom: 1px solid #CCC;

            &:first-child {
                text-align: center;
            }

            &:last-child {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            button {
                height: 2.5rem;
                padding: 0 1.5rem;

                text-transform: uppercase;
                font-weight: 600;

                color: var(--purple);
                border: 1.5px solid var(--purple);
                background: transparent;
                border-radius: 3px 0 0 3px;

                transition: all .2s ease;

                & + button {
                    border-left: none;
                    border-radius: 0 3px 3px 0;
                }

                &:hover {
                    color: var(--white);
                    background: var(--purple);
                }

            }
        }
    }

    @media screen and (max-width: 720px) {
        box-shadow: none;
        border-radius: none;


        thead {
            display: none;
        }

        tbody {
            tr {
                display: block;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
                border-radius: 5px;
                
                & + tr {
                    margin-top: 1.5rem;
                }

                &:hover {
                    box-shadow: 0 0 7px rgba(0, 0, 0, 0.7);
                    transform: translateY(-7px);
                }
            }
        }

        td {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &:last-child {
                border: none;
            }
        }


        // Adicionando atributo no content do :before
        td:not(:last-of-type)::before {
            content: attr(data-title);
            display: block;
            font-weight: bold;
            color: var(--purple);
        }
    }
`;

export const FilterTable = styled.div`
    margin-top: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .inputs {
        select {
            padding: 0 1rem;
            text-align: center;
            height: 2.5rem;
            border-radius: 0.25rem 0 0 0.25rem;
            border: 1px solid var(--gray-400);
            border-right: none;
            font-weight: 400;
            font-size: 1rem; 

            &:focus {
                color: var(--purple);
                border: none;
                outline: 2px solid var(--purple);
            }
        }

        input[type="text"] {
            padding: 0 1rem;
            height: 2.5rem;
            max-width: 8rem;
            border-radius: 0 0.25rem 0.25rem 0;
            border: 1px solid var(--gray-400);
            font-weight: 400;
            font-size: 1rem; 

            &:focus {
                color: var(--purple);
                border: none;
                outline: 2px solid var(--purple);
            }
        }

        @media screen and (max-width: 400) {
            input {
                max-width: 7rem;
            }
            
        }
    }

    .buttons {
        display: flex;
        gap: 1rem;

        button {
            height: 2.2rem;
            padding: 0 1rem;
            font-size: 1.2rem;
            text-transform: uppercase;
            color: var(--white);
            background: var(--purple);

            border: none;
            border-radius: 3px;
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

            transition: all .2s ease;

            &:hover {
                transform: translateY(-3px);
            }
        }
    }

`;

export const MessageTableEmpty = styled.tr`
    font-weight: 500;
    padding: 1rem 2em;
    text-transform: uppercase;
    line-height: 4rem;

    /* background: blue; */
    text-align: center;

    td {  
        
    }
`;
