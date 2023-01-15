import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);
class Modal extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  handleDecrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    const { isOpenModal, onClick } = this.props;
    const { count } = this.state;
    return (
      <div className={cx('modalClose', { modalOpen: isOpenModal })} onClick={onClick}>
        <div
          className={styles.modalwindow}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button type="button" className={cx('modalButton')} onClick={this.handleIncrement}>Increment</button>
          <button type="button" className={cx('modalButton')} onClick={this.handleDecrement}>Decrement</button>
          <h2 className={cx('h2')}>{count}</h2>

        </div>
      </div>

    );
  }
}

export default Modal;
