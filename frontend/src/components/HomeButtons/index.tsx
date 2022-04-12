import { ReactNode } from "react";
import { useCrud } from "../../contexts/CrudContext";
import { Container } from "./styles";

interface HomeButtonsProps {
    messageButton: string;
    linkTo: string;
    buttonIcon: ReactNode;
}


export function HomeButtons({ messageButton, linkTo, buttonIcon }: HomeButtonsProps) {
    return (
        <Container to={linkTo}>
            {buttonIcon}
            {messageButton}
        </Container>
    );
}