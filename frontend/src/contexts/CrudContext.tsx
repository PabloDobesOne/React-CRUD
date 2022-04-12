import { createContext, ReactNode, useContext, useState } from "react";

/* ===== TIPAGENS ===== */
interface CrudContextData {
    nameLogo: string;
    setNameLogo: (nameLogo: string) => void;
}

interface CrudProviderProps {
    children: ReactNode;
}


/* ===== CONTEXT ===== */
export const CrudContext = createContext<CrudContextData>({} as CrudContextData);

/* ===== PROVIDER ===== */
export function CrudProvider({ children }: CrudProviderProps) {
    const [ nameLogo, setNameLogo ] = useState<string>('React CRUD')


    return (
        <CrudContext.Provider value={{
            nameLogo,
            setNameLogo
        }}>
            {children}
        </CrudContext.Provider>
    );
}

/* ===== CUSTOM HOOK ===== */
export function useCrud() {
    const context = useContext(CrudContext);

    return context;
}