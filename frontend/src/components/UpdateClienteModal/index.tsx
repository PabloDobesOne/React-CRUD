import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useCrud } from '../../contexts/CrudContext';
import { Container } from './styles';

export function UpdateClienteModal() {
    const {
        isModalUpdateClientesOpen,
        setIsModalUpdateClientesOpen,
        updateCliente, 
        currentCliente, 
        setCurrentCliente
    } = useCrud();

    async function handleUpdateCliente(event: FormEvent) {
        event.preventDefault();

        await updateCliente(currentCliente.CLI_ID, currentCliente);

        setIsModalUpdateClientesOpen(false);
    }

    return (
        <Modal
            isOpen={isModalUpdateClientesOpen}
            onRequestClose={()=> setIsModalUpdateClientesOpen(false)}
            overlayClassName="react-modal-overlay "
            className="react-modal-content"
        >
            <Container onSubmit={handleUpdateCliente}>
                <h2>Atualizar cliente</h2>
                <input 
                    type="text" 
                    placeholder='Nome do cliente'
                    title='Nome do cliente'
                    value={currentCliente.CLI_NOME}
                    onChange={(event) => setCurrentCliente({
                        ...currentCliente,
                        CLI_NOME: event.target.value
                    })} 
                    required
                    minLength={3}
                    maxLength={50}
                    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                />

                <input 
                    type="date" 
                    placeholder='Data de nascimento'
                    title='Data de nascimento'
                    value={currentCliente.CLI_NASCIDO}
                    onChange={(event) => setCurrentCliente({
                        ...currentCliente,
                        CLI_NASCIDO: event.target.value
                    })}
                    required
                    minLength={10}
                    maxLength={10}
                />

                <input 
                    type="number"
                    placeholder='ID da cidade'
                    title='ID da cidade'
                    value={currentCliente.CIDADE_ID}
                    onChange={(event) => setCurrentCliente({
                        ...currentCliente,
                        CIDADE_ID: Number(event.target.value)
                    })}
                    required
                    minLength={1}
                    maxLength={10}
                />
                
                <button type="submit">
                    Atualizar
                </button>
            </Container>
        </Modal>

    );
}