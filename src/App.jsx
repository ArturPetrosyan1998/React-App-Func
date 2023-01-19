import { Component } from 'react';
import Aside from './components/Aside/Aside';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Home from './pages/Home/Home';
import './reset.scss';

class App extends Component {
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
      <>
        <Header />
        <Modal isOpenModal={isOpenModal} onClick={this.handleModalClose} />
        <Button modalButton text="Modal Button" onClick={this.handleModalOpen} />
      </>
    );
  }
}

export default App;
