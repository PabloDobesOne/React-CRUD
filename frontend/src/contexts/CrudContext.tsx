import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

/* ===== TIPAGENS ===== */
interface CrudContextData {
    nameLogo: string;
    changeNameLogo: (newNameLogo: string) => void;

    cidadesData: CidadesData[];
    clientesData: ClientesData[];
    

    createCidade: (newCidade: CidadesInput) => Promise<void>;
    deleteCidade: (idCidade: number) => Promise<void>;
    updateCidade: (idCidade: number, updatedCidade: CidadesData) => Promise<void>;

    createCliente: (newCliente: ClientesInput) => Promise<void>;
    updateCliente: (idCliente: number, updatedCliente: ClientesInput) => Promise<void>;
    deleteCliente: (idCliente: number) => Promise<void>;

    isModalCreateCidadeOpen: boolean;
    setIsModalCreateCidadeOpen: (isModalCreateCidadesOpen: boolean) => void;
    isModalCreateClienteOpen: boolean;
    setIsModalCreateClienteOpen: (isModalCreateClienteOpen: boolean) => void;

    isModalUpdateCidadesOpen: boolean;
    setIsModalUpdateCidadesOpen: (isModalUpdateCidadesOpen: boolean) => void;
    isModalUpdateClientesOpen: boolean;
    setIsModalUpdateClientesOpen: (isModalUpdateClientesOpen: boolean) => void;

    currentCidade: CidadesData;
    setCurrentCidade: (currentCidade: CidadesData) => void;

    currentCliente: ClientesData;
    setCurrentCliente: (currentCliente: ClientesData) => void;

    isAlertModalOpen: boolean;
    setIsAlertModalOpen: (isAlertModalOpen: boolean) => void;
    actionModalAlert: ActionsModalAlert;
    setActionModalAlert: (actionModalAlert: ActionsModalAlert) => void;
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

interface ClientesData {
    CLI_ID: number;
    CLI_NOME: string;
    CLI_NASCIDO: string;
    CIDADE_ID: number;
    CIDADE: {
        CIDADE_ID: number,
        CIDADE_NOME: string,
        CIDADE_UF: string
    }
}

type ClientesInput = Omit<ClientesData, 'CLI_ID' | 'CIDADE'>;



interface ActionsModalAlert {
    actions: 'delete-cidade' | 'delete-cliente',
    id: number;
}


/* ===== CONTEXT ===== */
export const CrudContext = createContext<CrudContextData>({} as CrudContextData);


/* ===== PROVIDER ===== */
export function CrudProvider({ children }: CrudProviderProps) {
    const [nameLogo, setNameLogo] = useState<string>('React CRUD');
    
    // STATES CIDADES
    const [cidadesData, setCidadesData] = useState<CidadesData[]>([]);
    const [isModalCreateCidadeOpen, setIsModalCreateCidadeOpen] = useState<boolean>(false);
    const [isModalUpdateCidadesOpen, setIsModalUpdateCidadesOpen] = useState<boolean>(false);
    const [isAlertModalOpen, setIsAlertModalOpen] = useState<boolean>(false);
    const [actionModalAlert, setActionModalAlert] = useState<ActionsModalAlert>({} as ActionsModalAlert);
    const [currentCidade, setCurrentCidade] = useState<CidadesData>({} as CidadesData);

    // STATES CLIENTES
    const [clientesData, setClientesData] = useState<ClientesData[]>([]);
    const [isModalCreateClienteOpen, setIsModalCreateClienteOpen] = useState<boolean>(false);
    const [isModalUpdateClientesOpen, setIsModalUpdateClientesOpen] = useState<boolean>(false);
    const [currentCliente, setCurrentCliente] = useState<ClientesData>({} as ClientesData);


    useEffect(() => {
        async function getDatas() {
            await getCidadesData();
            await getClientesData();
        }
        getDatas();  
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
            const cidadeAlreadyExists = 
                cidadesData.find(cidade => cidade.CIDADE_NOME.toLocaleUpperCase() === newCidade.CIDADE_NOME.toLocaleUpperCase()) && 
                cidadesData.find(cidade => cidade.CIDADE_UF.toLocaleUpperCase() === newCidade.CIDADE_UF.toLocaleUpperCase());

            if (cidadeAlreadyExists) throw new Error("Erro: cidade já cadastrada");

            newCidade.CIDADE_UF = newCidade.CIDADE_UF.toLocaleUpperCase();

            await api.post('/cidades', {
                ...newCidade
            });

            await getCidadesData();

            toast.success('Cidade criada com sucesso!');
        } catch(error:any) {
            console.log(error);
            toast.error(error.message || 'Erro ao criar cidade!');
        }
        
    }

    async function deleteCidade(idCidade: number) {
        try {
            const cidadeHasClienteIndexed = clientesData.find(cliente => cliente.CIDADE_ID === idCidade);

            if (cidadeHasClienteIndexed) throw new Error("Erro: cidade possui clientes indexados");

            await api.delete(`/cidades/${idCidade}`);
            
            const cidadesUpdated = cidadesData.filter(cidade => cidade.CIDADE_ID !== idCidade)
    
            if(cidadesUpdated) {
                setCidadesData([
                    ...cidadesUpdated
                ])
            }

            toast.success('Cidade deletada com sucesso!');
            
        } catch(error: any) {
            console.log(error);
            toast.error(error.message || 'Erro ao deletar cidade!');
            
        }
        
    }

    async function updateCidade(idCidade: number, updatedCidade: CidadesData) {
        try {

            const cidadeAlreadyExists = 
            cidadesData.find(cidade => cidade.CIDADE_NOME.toLocaleUpperCase() === updatedCidade.CIDADE_NOME.toLocaleUpperCase()) && 
            cidadesData.find(cidade => cidade.CIDADE_UF.toLocaleUpperCase() === updatedCidade.CIDADE_UF.toLocaleUpperCase());

            if (cidadeAlreadyExists) throw new Error("Erro: cidade já cadastrada");

            updatedCidade.CIDADE_UF = updatedCidade.CIDADE_UF.toLocaleUpperCase();
            
            await api.put(`/cidades/${idCidade}`, {
                ...updatedCidade
            });

            await getCidadesData();
            await getClientesData();

            console.log('Cidade atualizada')

            toast.success('Cidade atualizada com sucesso!');


        } catch(error: any) {
            console.log(error);
            toast.error(error.message || 'Erro ao atualizar cidade!');
        }
    }


    /* ===== HANDLE CLIENTES ===== */

    async function getClientesData() {
        try {
            await api.get<ClientesData[]>('/clientes').then(response => setClientesData(response.data));
        } catch(error) {
            console.log(error);
        }
    }

    async function createCliente(newCliente: ClientesInput) {
        try {
            await api.post('/clientes', {
                ...newCliente
            });

            await getClientesData();

            toast.success('Cliente criado com sucesso!');

        } catch(error) {
            console.log(error)
            toast.error(`Erro ao criar cliente!`);
        }
    }

    async function updateCliente(idCliente: number, updatedCliente: ClientesInput) {
        try {
            await api.put(`/clientes/${idCliente}`, {
                ...updatedCliente
            });

            await getClientesData();

            console.log('Cliente atualizado');

            toast.success('Cliente atualizado com sucesso');

        } catch(error) {
            console.log(error);
            toast.error('Erro ao atualizar cliente');
        }
    }

    async function deleteCliente(idCliente: number) {
        try {
            await api.delete(`/clientes/${idCliente}`);

            const clientesUpdated = clientesData.filter(cliente => cliente.CLI_ID !== idCliente)
    
            if(clientesUpdated) {
                setClientesData([
                    ...clientesUpdated
                ])
            }

            toast.success('Cliente deletado com sucesso!');

        } catch(error) {
            console.log(error)
            toast.error("Erro ao deletar cliente");
        }
    }

    return (
        <CrudContext.Provider value={{
            nameLogo,
            changeNameLogo,
            cidadesData,
            clientesData,
            createCidade,
            deleteCidade, 
            updateCidade,
            createCliente,
            updateCliente,
            deleteCliente,
            isModalCreateCidadeOpen,
            setIsModalCreateCidadeOpen,
            isModalCreateClienteOpen, 
            setIsModalCreateClienteOpen,
            isModalUpdateCidadesOpen, 
            setIsModalUpdateCidadesOpen,
            isModalUpdateClientesOpen, 
            setIsModalUpdateClientesOpen,
            currentCidade,
            setCurrentCidade, 
            currentCliente,
            setCurrentCliente,
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