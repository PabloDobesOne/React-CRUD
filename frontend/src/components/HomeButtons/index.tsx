import { Link } from "react-router-dom";
import { Container } from "./styles";

interface HomeButtonsProps {
    messageButton: string;
    linkTo: string;
    buttonIcon: 'cidades' | 'clientes';
}


export function HomeButtons({ messageButton, linkTo, buttonIcon }: HomeButtonsProps) {
    return (
        <Container to={linkTo}>
            {messageButton}
        </Container>
    );
}