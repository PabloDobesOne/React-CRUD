import { MainContainer } from "../../components/MainContainer";
import { useCrud } from "../../contexts/CrudContext";
import { Container, InformationContainer, TableData } from "./styles";

export function Clientes() {
    const { 
        changeNameLogo,
        clientesData, 
        setIsModalCreateClienteOpen
    } = useCrud();
    changeNameLogo('Clientes');

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
                        {clientesData.map(cliente => {
                            return (
                                <tr>
                                    <td data-title="ID">{cliente.CLI_ID}</td>
                                    <td data-title="NOME">{cliente.CLI_NOME}</td>
                                    <td data-title="NASCIDO">{cliente.CLI_NASCIDO}</td>
                                    <td data-title="CIDADE">{cliente.CIDADE.CIDADE_NOME}</td>
                                    <td data-title="UF">{cliente.CIDADE.CIDADE_UF}</td>
                                    <td data-title="ACTIONS">
                                        <button
                                            
                                        >
                                            Edit
                                        </button>
                                        <button
                                        
                                        >
                                            Del
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </TableData>
            </Container>
        </MainContainer>
    );
}