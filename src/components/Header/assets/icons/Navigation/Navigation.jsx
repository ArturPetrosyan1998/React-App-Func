import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

class Navigation extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.NavLink}>Home</NavLink>
        <NavLink to="/counter" className={styles.NavLink}>Counter</NavLink>
        <NavLink to="/login" className={styles.NavLink}>Login</NavLink>
        <NavLink to="/registration" className={styles.NavLink}>Registration</NavLink>
      </nav>
    );
  }
}

export default Navigation;
