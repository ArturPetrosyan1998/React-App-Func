import { Component } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

class Counter extends Component {
  state = {
    isOpenModal: false,
  };

  handleModalOpen = () => {
    const { isOpenModal } = this.state;
    this.setState({ isOpenModal: !isOpenModal });
  };

  handleModalClose = () => {
    const { isOpenModal } = this.state;
    this.setState({ isOpenModal: !isOpenModal });
  };

  render() {
    const { isOpenModal } = this.state;

    return (
      <div>
        <Modal isOpenModal={isOpenModal} onClick={this.handleModalClose} />
        <Button modalButton text="Modal Button" onClick={this.handleModalOpen} />
      </div>
    );
  }
}

export default Counter;
