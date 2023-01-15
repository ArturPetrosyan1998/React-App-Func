import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);
class Modal extends Component {
  render() {
    const { isOpenModal, onClick } = this.props;
    return (
      <div
        className={cx('modalClose', { modalOpen: isOpenModal })}
        onClick={onClick}
      >
        <div
          className={styles.modalwindow}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />

      </div>
    );
  }
}

export default Modal;
