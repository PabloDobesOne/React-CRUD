import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useCrud } from '../../contexts/CrudContext';
import { Container } from './styles';

interface NewCidadesModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root')

export function NewCreateCidadeModal() {
   const { isModalCreateCidadeOpen, setIsModalCreateCidadeOpen, createCidade } = useCrud();

   const [nameCidade, setNameCidade] = useState('');
   const [ufCidade, setUfCidade] = useState('');




    async function handleCreateNewCidade(event: FormEvent) {
        event.preventDefault();

        await createCidade({
            CIDADE_NOME: nameCidade,
            CIDADE_UF: ufCidade
        });

        console.log('Cidade Criada');
        setIsModalCreateCidadeOpen(false);
    }

    return (
        <Modal
            isOpen={isModalCreateCidadeOpen}
            onRequestClose={() => {setIsModalCreateCidadeOpen(false)}}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleCreateNewCidade}>
                <h2>Cadastrar cidade</h2>
                <input 
                    type="text" 
                    placeholder='Nome da cidade'
                    value={nameCidade}
                    onChange={(event) => setNameCidade(event.target.value)} 
                    required
                    minLength={3}
                    maxLength={50}
                />
                <input 
                    type="text" 
                    placeholder='UF da cidade'
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