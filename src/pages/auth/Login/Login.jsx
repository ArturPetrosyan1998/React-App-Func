import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import styles from './Login.module.scss';

const users = [
  { name: 'John', password: '111John' },
  { name: 'Mark', password: '222Mark' },
  { name: 'Ann', password: '333Ann' },
];
class Login extends Component {
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
    const foundUser = users.find((item) => item.name === login && item.password === password);

    if (foundUser) {
      localStorage.setItem('token', true);
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    const { login, password, isLoggedIn } = this.state;
    return isLoggedIn ? <Navigate to="/" /> : (
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
          <button disabled={!login || !password} type="submit">Submit</button>
        </form>

      </div>

    );
  }
}

export default Login;
