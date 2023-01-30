import { Component } from 'react';
import classNames from 'classnames/bind';
import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
class Home extends Component {
  state = {
    isOpen: false,
  };

  handleToggleAside = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Header onClick={this.handleToggleAside} className={cx({ header: isOpen === true })} />
        <Aside isOpen={isOpen} />
      </div>
    );
  }
}

export default Home;
