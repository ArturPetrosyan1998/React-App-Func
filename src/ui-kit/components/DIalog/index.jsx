import Modal from 'react-modal';
import Button from '../Button/Button';
import { withDialog } from '../../../hocs/withDialog';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

Modal.setAppElement('#root');

const Dialog = ({
  isOpen, closeDialog, label, children,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeDialog}
    style={customStyles}
    contentLabel={label}
  >
    <div>
      <Button onClick={closeDialog}>Close Dialog</Button>
    </div>
    {children}
  </Modal>
);

export default withDialog(Dialog);
