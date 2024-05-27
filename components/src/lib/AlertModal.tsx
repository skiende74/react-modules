import { Modal } from ".";
import { ModalSize } from "./common/Modal";

interface AlertModalProps {
  isOpen: boolean;
  closeModal: () => void;

  title: string;
  description: string;
  confirmLabel: string;
  size: ModalSize;
}
function AlertModal({ isOpen, closeModal, title, description, confirmLabel, size }: AlertModalProps) {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <Modal.Positioner position="center" widthSize={size}>
        <Modal.Header title={title} closeButton={true} onClose={closeModal} />
        <Modal.Content description={description} />
        <Modal.Footer confirmLabel={confirmLabel} onConfirm={closeModal} align="horizontal" buttonWidth="80px" />
      </Modal.Positioner>
    </Modal>
  );
}

export default AlertModal;
