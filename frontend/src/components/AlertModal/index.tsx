import Modal from 'react-modal';
import { useCrud } from '../../contexts/CrudContext';
import { Container } from './styles';


export function AlertModal() {
    const { isAlertModalOpen, setIsAlertModalOpen } = useCrud();

    return (
        <Modal
            isOpen={isAlertModalOpen}
            onRequestClose={() => {setIsAlertModalOpen(false)}}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                Você tem certeza !
                <button>Sim</button>
            </Container>
        </Modal>
    );
}