import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useCrud } from '../../contexts/CrudContext';
import { Container } from './styles';

interface NewCidadesModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root')

export function NewCreateClienteModal() {
   const { 
       isModalCreateClienteOpen, 
       setIsModalCreateClienteOpen, 
       createCliente 
    } = useCrud();

   const [nameCliente, setNameCliente] = useState('');
   const [birthCliente, setBirthCliente] = useState('');
   const [idCidade, setIdCidade] = useState<number>(0);


    async function handleCreateNewCliente(event: FormEvent) {
        event.preventDefault();

        await createCliente({
            CLI_NOME: nameCliente,
            CLI_NASCIDO: birthCliente,
            CIDADE_ID: idCidade
        })

        setNameCliente('');
        setBirthCliente('');
        setIdCidade(0);

        console.log('Cliente Criado');
        setIsModalCreateClienteOpen(false);
    }

    return (
        <Modal
            isOpen={isModalCreateClienteOpen}
            onRequestClose={() => {setIsModalCreateClienteOpen(false)}}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleCreateNewCliente}>
                <h2>Cadastrar cliente</h2>
                <input 
                    type="text" 
                    placeholder='Nome do cliente'
                    title='Nome do cliente'
                    value={nameCliente}
                    onChange={(event) => setNameCliente(event.target.value)} 
                    required
                    minLength={3}
                    maxLength={50}
                    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                />
                <input 
                    type="date"
                    placeholder='Data de nascimento'
                    title='Data de nascimento'
                    value={birthCliente}
                    onChange={(event) => setBirthCliente(event.target.value)} 
                    required
                    minLength={10}
                    maxLength={10}
                />
                <input 
                    type="number" 
                    placeholder='ID da cidade'
                    title='ID da cidade'
                    value={idCidade}
                    onChange={(event) => setIdCidade(Number(event.target.value))} 
                    required
                    maxLength={10}
                />
                
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}