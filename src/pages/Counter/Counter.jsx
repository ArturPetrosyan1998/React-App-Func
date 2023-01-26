import { Component } from 'react';
import classNames from 'classnames/bind';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';
import styles from './Counter.module.scss';

const cx = classNames.bind(styles);
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
        <Header onClick={this.handleToggleAside} className={cx({ header: isOpen === true })} />
        <div className={styles.asideStyle}>
          <Aside isOpen={isOpen} />
          <div className={styles.counterButton}>
            <Button onClick={this.handleModalOpen} className={styles.modalButton}>
              Modal
            </Button>
          </div>
        </div>
        <Modal isOpenModal={isOpenModal} onClick={this.handleModalClose} />
      </div>
    );
  }
}

export default Counter;
