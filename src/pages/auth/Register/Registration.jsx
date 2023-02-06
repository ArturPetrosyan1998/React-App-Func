import { Component } from 'react';
import classNames from 'classnames/bind';
import Input from '../../../ui-kit/components/Input/Input';
import styles from './Registration.module.scss';
import Button from '../../../ui-kit/components/Button/Button';
import { withRouter } from '../../../hocs/withRouter';

const cx = classNames.bind(styles);
class Registration extends Component {
  state = {
    login: '',
    password: '',
    repeatPassword: '',
    isBlurSuccess: false,
    isRepeatPassword: false,
    borderError: '',
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    const { isBlurSuccess, isRepeatPassword } = this.state;
    const { navigate } = this.props;
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
        return navigate('/login');
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
      login, password, repeatPassword, borderError,
    } = this.state;
    return (
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

export default withRouter(Registration);
