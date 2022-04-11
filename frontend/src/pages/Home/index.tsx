import { HomeButtons } from "../../components/HomeButtons";
import { MainContainer } from "../../components/MainContainer";
import { Container } from "./styles";



export function Home() {
    return (
        <MainContainer>
            <Container>
                <h2>Veja ou cadastre dados nos botões abaixo</h2>
                <HomeButtons messageButton="Acessar Cidades" linkTo="/cidades" buttonIcon="cidades"/>
                <HomeButtons messageButton="Acessar Clientes" linkTo="/clientes" buttonIcon="clientes"/>
            </Container>
        </MainContainer>
    );
}