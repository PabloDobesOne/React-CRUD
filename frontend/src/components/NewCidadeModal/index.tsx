import { FormEvent, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
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

        setNameCidade('');
        setUfCidade('');

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
            <button
                type='button'
                onClick={() => {setIsModalCreateCidadeOpen(false)}}
                className="react-modal-close"
            >
                <IoMdClose title='Fechar modal'/>
            </button>

            <Container onSubmit={handleCreateNewCidade}>
                <h2>Cadastrar cidade</h2>
                <input 
                    type="text" 
                    placeholder='Nome da cidade'
                    title='Nome da cidade'
                    value={nameCidade}
                    onChange={(event) => setNameCidade(event.target.value)} 
                    required
                    minLength={3}
                    maxLength={50}
                    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                />
                <input 
                    type="text" 
                    placeholder='UF da cidade'
                    title='UF da cidade'
                    value={ufCidade}
                    onChange={(event) => setUfCidade(event.target.value)} 
                    required
                    minLength={2}
                    maxLength={2}
                    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                />
                
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}