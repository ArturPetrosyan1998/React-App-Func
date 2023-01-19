import { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import styles from './Login.module.scss';

const users = [{ login: localStorage.getItem('login'), password: localStorage.getItem('password') }];
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
    const foundUser = users.find((item) => item.login === login && item.password === password);
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
          <button type="button"><Link to="/registration" className={styles.RegistrLink}>Create new account</Link></button>
        </form>
      </div>

    );
  }
}

export default Login;
