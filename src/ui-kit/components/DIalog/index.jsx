import Modal from 'react-modal';
import React, { Component } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

class Dialog extends Component {
  render() {
    const {
      isOpen, closeModal, label, children,
    } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={label}
      >
        {children}
      </Modal>
    );
  }
}

export default Dialog;
