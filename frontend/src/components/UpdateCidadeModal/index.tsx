import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useCrud } from '../../contexts/CrudContext';
import { Container } from './styles';

export function UpdateCidadeModal() {
    const {isModalUpdateCidadesOpen, setIsModalUpdateCidadesOpen, updateCidade, currentCidade, setCurrentCidade} = useCrud();

    // const [nameCidade, setNameCidade] = useState('');
    // const [ufCidade, setUfCidade] = useState('');

    async function handleUpdateCidade(event: FormEvent) {
        event.preventDefault();

        await updateCidade(currentCidade.CIDADE_ID, currentCidade);

        setIsModalUpdateCidadesOpen(false);
    }

    return (
        <Modal
            isOpen={isModalUpdateCidadesOpen}
            onRequestClose={()=> setIsModalUpdateCidadesOpen(false)}
            overlayClassName="react-modal-overlay "
            className="react-modal-content"
        >
            <Container onSubmit={handleUpdateCidade}>
                <h2>Atualizar cidade</h2>
                <input 
                    type="text" 
                    placeholder='Nome da cidade'
                    value={currentCidade.CIDADE_NOME}
                    onChange={(event) => setCurrentCidade({
                        ...currentCidade,
                        CIDADE_NOME: event.target.value
                    })} 
                    required
                    minLength={3}
                    maxLength={50}
                />
                <input 
                    type="text" 
                    placeholder='UF da cidade'
                    value={currentCidade.CIDADE_UF}
                    onChange={(event) => setCurrentCidade({
                        ...currentCidade,
                        CIDADE_UF: event.target.value
                    })} 
                    required
                    minLength={2}
                    maxLength={2}
                />
                
                <button type="submit">
                    Atualizar
                </button>
            </Container>
        </Modal>

    );
}