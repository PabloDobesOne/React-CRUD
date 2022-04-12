import { MainContainer } from "../../components/MainContainer";
import { useCrud } from "../../contexts/CrudContext";

export function Clientes() {
    const crudContext = useCrud();
    crudContext.setNameLogo('Clientes');

    return (
        <MainContainer>
            Clientes
        </MainContainer>
    );
}