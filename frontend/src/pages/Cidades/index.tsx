import { MainContainer } from "../../components/MainContainer";
import { useCrud } from "../../contexts/CrudContext";

export function Cidades() {
    const crudContext = useCrud();
    crudContext.setNameLogo('Cidades');

    return (
        <MainContainer>
            Cidades
        </MainContainer>
    );
}