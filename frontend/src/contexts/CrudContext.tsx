import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

/* ===== TIPAGENS ===== */
interface CrudContextData {
    nameLogo: string;
    changeNameLogo: (newNameLogo: string) => void;

    cidadesData: CidadesData[];

    createCidade: (newCidade: CidadesInput) => Promise<void>;
    deleteCidade: (idCidade: number) => Promise<void>;
    updateCidade: (idCidade: number, updatedCidade: CidadesData) => Promise<void>;

    isModalCidadesOpen: boolean;
    closeModalCreateCidade: () => void;
    openModalCreateCidade: () => void;

    isModalUpdateCidadesOpen: boolean;
    setIsModalUpdateCidadesOpen: (isModalUpdateCidadesOpen: boolean) => void;

    isAlertModalOpen: boolean;
    setIsAlertModalOpen: (isAlertModalOpen: boolean) => void;

    currentCidade: CidadesData;
    setCurrentCidade: (currentCidade: CidadesData) => void;

}

interface CrudProviderProps {
    children: ReactNode;
}

interface CidadesData {
    CIDADE_ID: number;
    CIDADE_NOME: string;
    CIDADE_UF: string;
}

type CidadesInput  = Omit<CidadesData, 'CIDADE_ID'>;


/* ===== CONTEXT ===== */
export const CrudContext = createContext<CrudContextData>({} as CrudContextData);

/* ===== PROVIDER ===== */
export function CrudProvider({ children }: CrudProviderProps) {
    const [nameLogo, setNameLogo] = useState<string>('React CRUD');
    const [cidadesData, setCidadesData] = useState<CidadesData[]>([]);
    const [isModalCidadesOpen, setIsModalCidadesOpen] = useState<boolean>(false);
    const [isModalUpdateCidadesOpen, setIsModalUpdateCidadesOpen] = useState<boolean>(false);
    const [isAlertModalOpen, setIsAlertModalOpen] = useState<boolean>(true);


    const [currentCidade, setCurrentCidade] = useState<CidadesData>({} as CidadesData);

    useEffect(() => {
        async function getCidadesData() {
            try {
                await api.get<CidadesData[]>('/cidades').then(response => setCidadesData(response.data));
            } catch(error) {
                console.log(error);
            }
        }

        getCidadesData();

    }, [])

    function changeNameLogo(newName: string) {
        setNameLogo(newName);
    }

    function openModalCreateCidade() {
        setIsModalCidadesOpen(true);
    }

    function closeModalCreateCidade() {
        setIsModalCidadesOpen(false);
    }


    /* ===== HANDLE CIDADES ===== */

    async function getCidadesData() {
        try {
            await api.get<CidadesData[]>('/cidades').then(response => setCidadesData(response.data));
        } catch(error) {
            console.log(error);
        }
    }

    async function createCidade(newCidade: CidadesInput) {
        try {
            const response = await api.post('/cidades', {
                ...newCidade
            });
    
            const cidade = response.data;
    
            setCidadesData([
                ...cidadesData,
                cidade
            ])
        } catch(error) {
            console.log(error);
            // coloque o react-tostify aqui
        }
        
    }

    async function deleteCidade(idCidade: number) {
        try {
            await api.delete(`/cidades/${idCidade}`);
            
            const cidadesUpdated = cidadesData.filter(cidade => cidade.CIDADE_ID !== idCidade)
    
            if(cidadesUpdated) {
                setCidadesData([
                    ...cidadesUpdated
                ])
            }

            
        } catch(error) {
            console.log(error);
            // coloque o react-tostify aqui
        }
        
    }

    async function updateCidade(idCidade: number, updatedCidade: CidadesData) {
        try {
            await api.put(`/cidades/${idCidade}`, {
                ...updatedCidade
            });

            await getCidadesData();

            console.log('Cidade atualizada')

        } catch(error) {
            console.log();
        }
    }


    /* ===== HANDLE CLIENTES ===== */

    


    return (
        <CrudContext.Provider value={{
            nameLogo,
            changeNameLogo,
            cidadesData,
            isModalCidadesOpen,
            closeModalCreateCidade,
            openModalCreateCidade,
            createCidade,
            deleteCidade, 
            updateCidade,
            isModalUpdateCidadesOpen, 
            setIsModalUpdateCidadesOpen,
            currentCidade,
            setCurrentCidade, 
            isAlertModalOpen, 
            setIsAlertModalOpen
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