import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className={styles.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/counter">Counter</NavLink>
        </nav>
      </div>
    );
  }
}

export default Navigation;
