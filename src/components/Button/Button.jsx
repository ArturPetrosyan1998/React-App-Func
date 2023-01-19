import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
class Button extends Component {
  render() {
    const { onClick, text = 'Click' } = this.props;
    return (
      <button
        type="button"
        onClick={onClick}
        className={cx('button')}
      >
        {text}
      </button>
    );
  }
}
export default Button;
