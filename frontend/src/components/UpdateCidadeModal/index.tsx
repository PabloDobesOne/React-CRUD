import { FormEvent, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';
import { useCrud } from '../../contexts/CrudContext';
import { Container } from './styles';

export function UpdateCidadeModal() {
    const {
        isModalUpdateCidadesOpen,
        setIsModalUpdateCidadesOpen,
        updateCidade,
        currentCidade,
        setCurrentCidade
    } = useCrud();

    async function handleUpdateCidade(event: FormEvent) {
        event.preventDefault();

        await updateCidade(currentCidade.CIDADE_ID, currentCidade);

        setIsModalUpdateCidadesOpen(false);
    }

    return (
        <Modal
            isOpen={isModalUpdateCidadesOpen}
            onRequestClose={() => setIsModalUpdateCidadesOpen(false)}
            overlayClassName="react-modal-overlay "
            className="react-modal-content"
        >
            <button
                type='button'
                onClick={() => { setIsModalUpdateCidadesOpen(false) }}
                className="react-modal-close"
            >
                <IoMdClose title='Fechar modal' />
            </button>

            <Container onSubmit={handleUpdateCidade}>
                <h2>Atualizar cidade</h2>
                <input
                    type="text"
                    placeholder='Nome da cidade'
                    title='Nome da cidade'
                    value={currentCidade.CIDADE_NOME}
                    onChange={(event) => setCurrentCidade({
                        ...currentCidade,
                        CIDADE_NOME: event.target.value
                    })}
                    required
                    minLength={3}
                    maxLength={50}
                    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                />
                <input
                    type="text"
                    placeholder='UF da cidade'
                    title='UF da cidade'
                    value={currentCidade.CIDADE_UF}
                    onChange={(event) => setCurrentCidade({
                        ...currentCidade,
                        CIDADE_UF: event.target.value
                    })}
                    required
                    minLength={2}
                    maxLength={2}
                    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                />

                <button
                    type="submit"
                    onClick={() => {
                        setCurrentCidade({
                            ...currentCidade,
                            CIDADE_NOME: currentCidade.CIDADE_NOME.trim(),
                            CIDADE_UF: currentCidade.CIDADE_UF.trim()
                        })
                    }}
                >
                    Atualizar
                </button>
            </Container>
        </Modal>

    );
}