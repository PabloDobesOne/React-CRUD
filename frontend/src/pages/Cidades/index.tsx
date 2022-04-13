import { MainContainer } from "../../components/MainContainer";
import { useCrud } from "../../contexts/CrudContext";
import { Container, InformationContainer, TableData } from "./styles";

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

    changeNameLogo('Cidades')

    return (
        <MainContainer>
            <Container>
                <InformationContainer>
                    <h2>Cidades</h2>
                    <button
                        type="button"
                        onClick={() => {
                            setIsModalCreateCidadeOpen(true);
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
                            <th>Uf</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cidadesData.map(cidade => {
                            return (
                                <tr key={cidade.CIDADE_ID}>
                                    <td data-title="ID">{cidade.CIDADE_ID}</td>
                                    <td data-title="NOME">{cidade.CIDADE_NOME}</td>
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
                                            Edit
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