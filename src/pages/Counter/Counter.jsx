import { Component } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';
import styles from './Counter.module.scss';

class Counter extends Component {
  state = {
    isOpenModal: false,
    isOpen: false,

  };

  handleToggleAside = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
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
    const { isOpenModal, isOpen } = this.state;

    return (
      <div>
        <Header onClick={this.handleToggleAside} />
        <div className={styles.asideStyle}>
          <Aside isOpen={isOpen} />
          <div><Button modalButton text="Modal Button" onClick={this.handleModalOpen} /></div>
        </div>
        <Modal isOpenModal={isOpenModal} onClick={this.handleModalClose} />
      </div>
    );
  }
}

export default Counter;
