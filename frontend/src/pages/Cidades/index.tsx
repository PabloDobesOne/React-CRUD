import { MainContainer } from "../../components/MainContainer";
import { useCrud } from "../../contexts/CrudContext";
import { Container, InformationContainer, TableData } from "./styles";

export function Cidades() {
    const { 
        cidadesData, 
        changeNameLogo, 
        openModalCreateCidade, 
        deleteCidade, 
        setIsModalUpdateCidadesOpen,
        setCurrentCidade
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
                            openModalCreateCidade();
                        }}
                    >
                        Create
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
                                    <td>{cidade.CIDADE_ID}</td>
                                    <td>{cidade.CIDADE_NOME}</td>
                                    <td>{cidade.CIDADE_UF}</td>
                                    <td>
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
                                            onClick={async() => {await deleteCidade(cidade.CIDADE_ID)}}
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