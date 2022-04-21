import { useEffect, useState } from "react";
import { MainContainer } from "../../components/MainContainer";
import { useCrud } from "../../contexts/CrudContext";
import { listFiltersCidade } from "../../data/filters";
import { Container, FilterTable, InformationContainer, MessageTableEmpty, TableData } from "./styles";

import { FaArrowDown, FaCity, FaEdit } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";

export function Cidades() {
    const {
        cidadesData,
        changeNameLogo,
        setIsModalCreateCidadeOpen,
        deleteCidade,
        setIsModalUpdateCidadesOpen,
        setCurrentCidade,
        setIsAlertModalOpen,
        setActionModalAlert
    } = useCrud();


    const [cidades, setCidades] = useState(cidadesData);

    const initialFilterOption = listFiltersCidade[0].id;
    const [filterOption, setFilterOption] = useState<number>(initialFilterOption);
    const [filterValue, setFilterValue] = useState('');


    useEffect(() => {
        changeNameLogo('Cidades')
        setCidades(cidadesData);
    }, [cidadesData]);

    async function handleFilterTable() {

        if (filterValue.trim() === '') return setCidades(cidadesData);

        let updatedCidades = cidadesData;
        let filterValueFormated = filterValue.trim()

        if (filterOption === 1) {
            updatedCidades = cidadesData.filter(cidade => cidade.CIDADE_ID === Number(filterValueFormated))
        }

        if (filterOption === 2) {
            updatedCidades = cidadesData.filter(cidade =>
                cidade.CIDADE_NOME.toLocaleLowerCase() === filterValueFormated.toLocaleLowerCase()
            )
        }

        if (filterOption === 3) {
            updatedCidades = cidadesData.filter(cidade =>
                cidade.CIDADE_UF.toLocaleUpperCase() === filterValueFormated.toLocaleUpperCase().trim()
            )
        }

        setCidades(updatedCidades);
    }


    return (
        <MainContainer>
            <Container>
                <InformationContainer>
                    <h2>
                        <FaCity />
                        Cidades
                    </h2>
                    <button
                        type="button"
                        onClick={() => {
                            setIsModalCreateCidadeOpen(true);
                        }}
                    >
                        Criar
                    </button>
                </InformationContainer>
                <FilterTable>
                    <div className="inputs">
                        <div className="custom-select">
                            <select value={filterOption} onChange={event => setFilterOption(Number(event.target.value))}>
                                {listFiltersCidade.map((filter) => {
                                    return (<option value={filter.id} key={filter.id}>{filter.name}</option>)
                                }
                                )}
                            </select>
                            <FaArrowDown />
                        </div>
                        <input
                            type="text"
                            placeholder="Valor de filtro"
                            title="Valor de filtro"
                            value={filterValue}
                            onChange={(event) => setFilterValue(event.target.value)}
                            onKeyUp={(event) => {
                                if (event.key === 'Enter') {
                                    handleFilterTable()
                                }
                            }}
                        />
                    </div>

                    <div className="buttons">
                        <button onClick={handleFilterTable}>
                            Filtrar
                        </button>
                        <button onClick={() => {
                            setCidades(cidadesData)
                            setFilterValue('');
                        }
                        }>
                            Limpar Filtro
                        </button>
                    </div>
                </FilterTable>
                <TableData>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Cidade</th>
                            <th>Uf</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cidades.length === 0
                                ?
                                undefined
                                :
                                cidades.map(cidade => {
                                    return (
                                        <tr key={cidade.CIDADE_ID}>
                                            <td data-title="ID">{cidade.CIDADE_ID}</td>
                                            <td data-title="CIDADE">{cidade.CIDADE_NOME}</td>
                                            <td data-title="UF">{cidade.CIDADE_UF}</td>
                                            <td data-title="ACTIONS">
                                                <button
                                                    onClick={() => {
                                                        setIsModalUpdateCidadesOpen(true)
                                                        setCurrentCidade({
                                                            CIDADE_ID: cidade.CIDADE_ID,
                                                            CIDADE_NOME: cidade.CIDADE_NOME,
                                                            CIDADE_UF: cidade.CIDADE_UF
                                                        })
                                                    }}
                                                >
                                                    <FaEdit size={20}></FaEdit>
                                                </button>
                                                <button
                                                    onClick={
                                                        () => {
                                                            setIsAlertModalOpen(true)
                                                            setActionModalAlert({
                                                                actions: 'delete-cidade',
                                                                id: cidade.CIDADE_ID
                                                            })
                                                        }
                                                    }
                                                >
                                                    <MdDelete size={20}></MdDelete>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                        }
                    </tbody>
                    <tfoot>
                        {cidades.length === 0
                            ?
                            <MessageTableEmpty>
                                <td colSpan={4}>Nenhum registro foi encontrado</td>
                            </MessageTableEmpty>
                            :
                            undefined
                        }
                    </tfoot>
                </TableData>

            </Container>
        </MainContainer>
    );
}