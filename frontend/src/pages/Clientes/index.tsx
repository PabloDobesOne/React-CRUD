import { useEffect, useState } from "react";
import { MainContainer } from "../../components/MainContainer";
import { useCrud } from "../../contexts/CrudContext";
import { listFiltersCidade, listFiltersClientes } from "../../data/filters";
import { Container, FilterTable, InformationContainer, MessageTableEmpty, TableData } from "./styles";

import { FaArrowDown } from 'react-icons/fa';

export function Clientes() {
    const { 
        changeNameLogo,
        clientesData, 
        setIsModalCreateClienteOpen,
        setIsModalUpdateClientesOpen,
        setCurrentCliente,
        setIsAlertModalOpen, 
        setActionModalAlert
    } = useCrud();

    
    const [clientes, setClientes] = useState(clientesData);

    const initialFilterOption = listFiltersCidade[0].id;
    const [filterOption, setFilterOption] = useState<number>(initialFilterOption);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        changeNameLogo('Clientes')
        setClientes(clientesData)
    }, [clientesData]);

    async function handleFilterTable() {

        if (filterValue.trim() === '') return setClientes(clientesData);

        let updatedClientes = clientesData;
        let filterValueFormated = filterValue.trim()

        if(filterOption === 1) {
            updatedClientes = clientesData.filter(cliente => cliente.CLI_ID === Number(filterValueFormated))
        }

        if(filterOption === 2) {
            updatedClientes = clientesData.filter(cliente => 
                cliente.CLI_NOME.toLocaleLowerCase() === filterValueFormated.toLocaleLowerCase()
            )
        }

        if(filterOption === 3) {
            updatedClientes = clientesData.filter(cliente => 
                cliente.CIDADE.CIDADE_NOME.toLocaleUpperCase() === filterValueFormated.toLocaleUpperCase()
            )           
        }

        if(filterOption === 4) {
            updatedClientes = clientesData.filter(cliente => 
                cliente.CIDADE.CIDADE_UF.toLocaleUpperCase() === filterValueFormated.toLocaleUpperCase()
            )           
        }

        setClientes(updatedClientes);
    }


    return (
        <MainContainer>
            <Container>
                <InformationContainer>
                    <h2>Clientes</h2>
                    <button
                        onClick={() => {
                            setIsModalCreateClienteOpen(true)
                        }}
                    >
                        Criar
                    </button>
                </InformationContainer>
                <FilterTable>
                        <div className="inputs">
                            <div className="custom-select">
                                <select value={filterOption} onChange={event => setFilterOption(Number(event.target.value))}>
                                    {listFiltersClientes.map((filter) => {
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
                            />
                        </div>
                        
                        <div className="buttons">
                            <button onClick={handleFilterTable}>
                                Filtrar
                            </button>
                            <button onClick={() => {
                                    setClientes(clientesData)
                                    setFilterValue('');
                                }
                            }>
                                Resetar
                            </button>
                        </div>
                </FilterTable>
                <TableData>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Nascido</th>
                            <th>Cidade</th>
                            <th>Uf</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clientes.length === 0
                            ?
                            undefined
                            :
                            clientes.map((cliente, index) => {                                                         
                                return (
                                    <tr key={index}>
                                        <td data-title="ID">{cliente.CLI_ID}</td>
                                        <td data-title="NOME">{cliente.CLI_NOME}</td>
                                        <td data-title="NASCIDO">
                                            <input 
                                                type="date"
                                                title="Data de aniversário"
                                                readOnly 
                                                value={cliente.CLI_NASCIDO}                                                
                                            />
                                        </td>
                                        <td data-title="CIDADE">{cliente.CIDADE.CIDADE_NOME}</td>
                                        <td data-title="UF">{cliente.CIDADE.CIDADE_UF}</td>
                                        <td data-title="ACTIONS">
                                            <button
                                                onClick={() => {
                                                    setIsModalUpdateClientesOpen(true)
                                                    setCurrentCliente({
                                                        CLI_ID: cliente.CLI_ID,
                                                        CLI_NOME: cliente.CLI_NOME,
                                                        CLI_NASCIDO: cliente.CLI_NASCIDO,
                                                        CIDADE_ID: cliente.CIDADE_ID,
                                                        CIDADE: cliente.CIDADE
                                                    })
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={
                                                    () => {
                                                        setIsAlertModalOpen(true)
                                                        setActionModalAlert({
                                                            actions: 'delete-cliente',
                                                            id: cliente.CLI_ID
                                                        })
                                                    }
                                                }
                                            >
                                                Del
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                    <tfoot>
                        {   clientes.length === 0
                            ?
                            <MessageTableEmpty>
                                <td colSpan={6}>Nenhum registro foi encontrado</td>
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