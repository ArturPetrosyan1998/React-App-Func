import { Component } from 'react';
import imgHamburger from './assets/icons/hamburger.png';
import Navigation from './assets/icons/Navigation/Navigation';
import styles from './Header.module.scss';

class Header extends Component {
  render() {
    const { ...rest } = this.props;
    return (
      <header className={styles.container}>
        <div {...rest}>
          <img src={imgHamburger} alt="hamburger" />
        </div>
        <div>
          <Navigation />
        </div>

      </header>
    );
  }
}

export default Header;
