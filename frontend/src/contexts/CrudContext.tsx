import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

/* ===== TIPAGENS ===== */
interface CrudContextData {
    nameLogo: string;
    changeNameLogo: (newNameLogo: string) => void;

    cidadesData: CidadesData[];

    createCidade: (newCidade: CidadesInput) => Promise<void>;
    deleteCidade: (idCidade: number) => Promise<void>;
    updateCidade: (idCidade: number, updatedCidade: CidadesData) => Promise<void>;

    isModalCreateCidadeOpen: boolean;
    setIsModalCreateCidadeOpen: (isModalCreateCidadesOpen: boolean) => void;

    isModalUpdateCidadesOpen: boolean;
    setIsModalUpdateCidadesOpen: (isModalUpdateCidadesOpen: boolean) => void;

    isAlertModalOpen: boolean;
    setIsAlertModalOpen: (isAlertModalOpen: boolean) => void;
    actionModalAlert: ActionsModalAlert;
    setActionModalAlert: (actionModalAlert: ActionsModalAlert) => void;


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


interface ActionsModalAlert {
    actions: 'delete-cidade' | 'delete-cliente',
    id: number;
}


/* ===== CONTEXT ===== */
export const CrudContext = createContext<CrudContextData>({} as CrudContextData);

/* ===== PROVIDER ===== */
export function CrudProvider({ children }: CrudProviderProps) {
    const [nameLogo, setNameLogo] = useState<string>('React CRUD');
    const [cidadesData, setCidadesData] = useState<CidadesData[]>([]);
    const [isModalCreateCidadeOpen, setIsModalCreateCidadeOpen] = useState<boolean>(false);
    const [isModalUpdateCidadesOpen, setIsModalUpdateCidadesOpen] = useState<boolean>(false);
    const [isAlertModalOpen, setIsAlertModalOpen] = useState<boolean>(false);
    const [actionModalAlert, setActionModalAlert] = useState<ActionsModalAlert>({} as ActionsModalAlert);
 

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
            newCidade.CIDADE_UF = newCidade.CIDADE_UF.toLocaleUpperCase();

            const response = await api.post('/cidades', {
                ...newCidade
            });
    
            const cidade = response.data;
    
            setCidadesData([
                ...cidadesData,
                cidade
            ])

            toast.success('Cidade criada com sucesso!');
        } catch(error) {
            console.log(error);
            toast.error('Erro ao criar cidade!');
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

            toast.success('Cidade deletada com sucesso!');
            
        } catch(error) {
            console.log(error);
            toast.error('Erro ao deletar cidade!');
            
        }
        
    }

    async function updateCidade(idCidade: number, updatedCidade: CidadesData) {
        try {
            updatedCidade.CIDADE_UF = updatedCidade.CIDADE_UF.toLocaleUpperCase();
            
            await api.put(`/cidades/${idCidade}`, {
                ...updatedCidade
            });

            await getCidadesData();

            console.log('Cidade atualizada')

            toast.success('Cidade atualizada com sucesso!');


        } catch(error) {
            console.log(error);
            toast.error('Erro ao atualizar cidade!');
        }
    }


    /* ===== HANDLE CLIENTES ===== */

    


    return (
        <CrudContext.Provider value={{
            nameLogo,
            changeNameLogo,
            cidadesData,
            isModalCreateCidadeOpen,
            setIsModalCreateCidadeOpen,
            createCidade,
            deleteCidade, 
            updateCidade,
            isModalUpdateCidadesOpen, 
            setIsModalUpdateCidadesOpen,
            currentCidade,
            setCurrentCidade, 
            isAlertModalOpen, 
            setIsAlertModalOpen,
            actionModalAlert, 
            setActionModalAlert
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