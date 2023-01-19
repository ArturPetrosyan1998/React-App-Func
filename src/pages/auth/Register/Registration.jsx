import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import styles from './Registration.module.scss';

class Registration extends Component {
  state = {
    login: '',
    password: '',
    isLoggedIn: false,
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { login, password } = this.state;
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
    if (login && password) {
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    const { login, password, isLoggedIn } = this.state;
    return isLoggedIn ? <Navigate to="/login" /> : (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <input
            value={login}
            onChange={this.onChange}
            type="text"
            placeholder="User Name"
            name="login"
          />
          <input
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
            name="password"
          />
          <button disabled={!login || !password} type="submit">Create Account</button>
        </form>

      </div>

    );
  }
}

export default Registration;
