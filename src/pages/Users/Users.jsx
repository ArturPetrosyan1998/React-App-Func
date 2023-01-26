import classNames from 'classnames/bind';
import { Component } from 'react';
import Header from '../../components/Header/Header';
import styles from './Users.module.scss';
import { API } from '../../api';

const cx = classNames.bind(styles);
class Users extends Component {
  state = {
    users: [],

  };

  async componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const users = await API.user.getUsers();
    this.setState({ users });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <div>
          <Header onClick={this.handleToggleAside} className="header" />
        </div>
        <div>
          {users.map((item) => <h2 key={item.id}>{item.name}</h2>)}
        </div>
      </>

    );
  }
}

export default Users;
