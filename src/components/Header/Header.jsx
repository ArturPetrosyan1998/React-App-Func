import { Component } from 'react';
import imgHamburger from './assets/icons/hamburger.png';
import styles from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.container}>
        <div><img src={imgHamburger} alt="hamburger" /></div>
      </header>
    );
  }
}

export default Header;
