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
   const { isModalCreateClienteOpen, setIsModalCreateClienteOpen, createCidade } = useCrud();

   const [nameCidade, setNameCidade] = useState('');
   const [ufCidade, setUfCidade] = useState('');

    async function handleCreateNewCidade(event: FormEvent) {
        event.preventDefault();

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
            <Container onSubmit={handleCreateNewCidade}>
                <h2>Cadastrar cliente</h2>
                <input 
                    type="text" 
                    placeholder='Nome do cliente'
                    value={nameCidade}
                    onChange={(event) => setNameCidade(event.target.value)} 
                    required
                    minLength={3}
                    maxLength={50}
                />
                <input 
                    type="text" 
                    placeholder='UF do cliente'
                    value={ufCidade}
                    onChange={(event) => setUfCidade(event.target.value)} 
                    required
                    minLength={2}
                    maxLength={2}
                />
                
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}