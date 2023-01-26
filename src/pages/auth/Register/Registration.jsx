import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import Input from '../../../components/Input/Input';
import styles from './Registration.module.scss';
import Button from '../../../components/Button/Button';

const cx = classNames.bind(styles);
class Registration extends Component {
  state = {
    login: '',
    password: '',
    repeatPassword: '',
    isLoggedIn: false,
    isBlurSuccess: false,
    isRepeatPassword: false,
    borderError: '',
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    const { isBlurSuccess, isRepeatPassword } = this.state;
    event.preventDefault();
    if (isBlurSuccess && isRepeatPassword) {
      const {
        login, password,
      } = this.state;
      const users = JSON.parse(localStorage.getItem('user')) || [];
      users.push({
        userName: login,
        userPassword: password,
      });
      const usersStr = JSON.stringify(users);
      localStorage.setItem('user', usersStr);
      if (users && isBlurSuccess && isRepeatPassword) {
        this.setState({
          isLoggedIn: true,
        });
      }
    }
  };

  onBlur = (event) => {
    const { login } = this.state;
    const users = JSON.parse(localStorage.getItem('user')) || [];
    const usersFind = users.map((item) => item).find((item) => item.userName === login);
    if (event.target.value.length < 8 || usersFind) {
      this.setState({ borderError: false });
    } else {
      this.setState({ isBlurSuccess: true, borderError: true });
    }
  };

  handleRepeatPassword = () => {
    const {
      password, repeatPassword,
    } = this.state;
    if (repeatPassword === password) {
      this.setState({ isRepeatPassword: true, borderError: true });
    } else {
      this.setState({ borderError: false });
    }
  };

  render() {
    const {
      login, password, repeatPassword, isLoggedIn, borderError,
    } = this.state;
    return isLoggedIn ? <Navigate to="/login" /> : (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.onSubmit}>

          <Input
            onBlur={this.onBlur}
            id="user-login"
            value={login}
            onChange={this.onChange}
            type="text"
            placeholder="User Name"
            name="login"
            className={cx({ red: borderError === false }, { greenyellow: borderError === true })}
          />

          <Input
            onBlur={this.onBlur}
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
            name="password"
            id="user-password"
            className={cx({ red: borderError === false }, { greenyellow: borderError === true })}

          />
          <Input
            onBlur={this.handleRepeatPassword}
            value={repeatPassword}
            onChange={this.onChange}
            type="password"
            placeholder="Repeat Password"
            name="repeatPassword"
            id="user-repeat-password"
            className={cx({ red: borderError === false }, { greenyellow: borderError === true })}
          />
          <Button
            disabled={!login || !password || !repeatPassword}
            type="submit"
          >
            Create Account
          </Button>
        </form>

      </div>

    );
  }
}

export default Registration;
