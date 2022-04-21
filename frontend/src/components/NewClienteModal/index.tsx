import { FormEvent, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';
import { useCrud } from '../../contexts/CrudContext';
import { Container, CustomSelect } from './styles';

import { FaArrowDown } from 'react-icons/fa';
import { api } from '../../services/api';


Modal.setAppElement('#root')

export function NewCreateClienteModal() {
    const {
        isModalCreateClienteOpen,
        setIsModalCreateClienteOpen,
        createCliente,
        cidadesData
    } = useCrud();

    const [nameCliente, setNameCliente] = useState('');
    const [birthCliente, setBirthCliente] = useState('');
    const [idCidade, setIdCidade] = useState(0);

    useEffect(() => {
        async function loadData() {
            try {
                await api.get('/cidades').then(response => setIdCidade(response.data[0].CIDADE_ID));
            } catch (error) {
                console.log(error);
            }
        }
        loadData();
    }, [cidadesData]);

    async function handleCreateNewCliente(event: FormEvent) {
        event.preventDefault();

        await createCliente({
            CLI_NOME: nameCliente,
            CLI_NASCIDO: birthCliente,
            CIDADE_ID: idCidade
        })

        setNameCliente('');
        setBirthCliente('');
        setIdCidade(cidadesData[0].CIDADE_ID);

        console.log('Cliente Criado');
        setIsModalCreateClienteOpen(false);
    }

    return (
        <Modal
            isOpen={isModalCreateClienteOpen}
            onRequestClose={() => {
                setIsModalCreateClienteOpen(false)
                setNameCliente('');
                setBirthCliente('');
                setIdCidade(cidadesData[0].CIDADE_ID);
            }}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type='button'
                onClick={() => {
                    setIsModalCreateClienteOpen(false)
                    setNameCliente('');
                    setBirthCliente('');
                    setIdCidade(cidadesData[0].CIDADE_ID);
                }}
                className="react-modal-close"
            >
                <IoMdClose title='Fechar modal' />
            </button>

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
                    placeholder='dd/mm/yyyy'
                    title='dd/mm/yyyy'
                    value={birthCliente}
                    onChange={(event) => {
                        setBirthCliente(event.target.value)
                    }}
                    required
                />

                <CustomSelect>
                    <select
                        value={idCidade}
                        onChange={event => setIdCidade(Number(event.target.value))}
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

                <button
                    type="submit"
                    onClick={() => {
                        setNameCliente(nameCliente.trim())
                        setBirthCliente(birthCliente.trim())
                    }}
                >
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}