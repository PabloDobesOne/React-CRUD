import { MainContainer } from "../../components/MainContainer";
import { useCrud } from "../../contexts/CrudContext";

export function Clientes() {
    const { changeNameLogo } = useCrud();
    changeNameLogo('Clientes');

    return (
        <MainContainer>
            Clientes
        </MainContainer>
    );
}