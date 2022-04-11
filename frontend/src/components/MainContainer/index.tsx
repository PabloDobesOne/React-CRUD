import { ReactNode } from "react";
import { Container } from "./styles";

interface MainContainerProps {
    children: ReactNode;
}

export function MainContainer({ children }: MainContainerProps) {
    return (
        <Container>
            {children}
        </Container>
    );
}