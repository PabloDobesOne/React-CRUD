import { HomeButtons } from "../../components/HomeButtons";
import { MainContainer } from "../../components/MainContainer";
import { Container } from "./styles";
import { FaCity } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { useCrud } from "../../contexts/CrudContext";



export function Home() {
    const { changeNameLogo } = useCrud();
    changeNameLogo('React CRUD');

    return (
        <MainContainer>
            <Container>
                {/* <h2>Veja ou cadastre dados nos botões abaixo</h2> */}
                <HomeButtons messageButton="Acessar Cidades" linkTo="/cidades" buttonIcon={<FaCity />}/>
                <HomeButtons messageButton="Acessar Clientes" linkTo="/clientes" buttonIcon={<BsFillPeopleFill />}/>
            </Container>
        </MainContainer>
    );
}