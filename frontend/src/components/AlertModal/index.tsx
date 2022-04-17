import Modal from 'react-modal';
import { useCrud } from '../../contexts/CrudContext';
import { Container } from './styles';


export function AlertModal() {
    const {
        isAlertModalOpen,
        setIsAlertModalOpen,
        actionModalAlert,
        deleteCidade,
        deleteCliente
    } = useCrud();



    async function handleActionOptions() {
        if (actionModalAlert.actions === 'delete-cidade') {
            await deleteCidade(actionModalAlert.id);
        }
        if (actionModalAlert.actions === 'delete-cliente') {
            await deleteCliente(actionModalAlert.id)
        }
    }


    return (
        <Modal
            isOpen={isAlertModalOpen}
            onRequestClose={() => { setIsAlertModalOpen(false) }}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>
                    Você tem certeza !
                </h2>

                <div className="buttons">
                    <button
                        type='submit'
                        className='button__yes'
                        onClick={() => {
                            handleActionOptions()
                            setIsAlertModalOpen(false)
                        }}
                    >
                        Sim
                    </button>
                    <button
                        type='submit'
                        className='button__not'
                        onClick={() => { setIsAlertModalOpen(false) }}
                    >
                        Não
                    </button>
                </div>
            </Container>
        </Modal>
    );
}