import { FormEvent } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';
import { useCrud } from '../../contexts/CrudContext';
import { Container } from './styles';

import { CustomSelect } from './styles';

export function UpdateClienteModal() {
    const {
        isModalUpdateClientesOpen,
        setIsModalUpdateClientesOpen,
        updateCliente, 
        currentCliente, 
        setCurrentCliente,
        cidadesData
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
            <button
                type='button'
                onClick={() => {setIsModalUpdateClientesOpen(false)}}
                className="react-modal-close"
            >
                <IoMdClose title='Fechar modal'/>
            </button>

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
                    placeholder='Data de nascimento (mm/dd/yyyy)'
                    title='Data de nascimento (mm/dd/yyyy)'
                    value={currentCliente.CLI_NASCIDO}
                    onChange={(event) => setCurrentCliente({
                        ...currentCliente,
                        CLI_NASCIDO: event.target.value
                    })}
                    required
                    minLength={10}
                    maxLength={10}
                />

                <CustomSelect>
                    <select 
                        value={currentCliente.CIDADE_ID} 
                        onChange={event => setCurrentCliente({
                            ...currentCliente,
                            CIDADE_ID: Number(event.target.value)
                        })}
                        title="Cidade do cliente"
                    >
                        {cidadesData.map((cidade) => {
                                return (
                                    <option value={cidade.CIDADE_ID} key={cidade.CIDADE_ID}>
                                        {cidade.CIDADE_NOME} - {cidade.CIDADE_UF}
                                    </option>
                                )                                                                  
                            }                                                                                                                                                    
                        )}
                    </select>
                    <FaArrowDown />
                </CustomSelect>


                
                <button type="submit">
                    Atualizar
                </button>
            </Container>
        </Modal>

    );
}