import { Component } from 'react';
import Aside from './components/Aside/Aside';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import './Reset.scss';

class App extends Component {
  state = {
    isOpen: false,
    isOpenModal: false,
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
    const { isOpen, isOpenModal } = this.state;
    return (
      <>
        <Aside isOpen={isOpen} />
        <Button onClick={this.handleToggleAside} text="Button Aside" />
        <Modal isOpenModal={isOpenModal} onClick={this.handleModalClose} />
        <Button modalButton text="Modal Button" onClick={this.handleModalOpen} />
      </>
    );
  }
}

export default App;
