import classNames from 'classnames/bind';
import { Component } from 'react';
import Header from '../../components/Header/Header';
import styles from './Users.module.scss';
import { API } from '../../api';
import Table from '../../components/Table/Table';
import axios from '../../api/axios';

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
      <div>
        <Header onClick={this.handleToggleAside} className="header" />
        <Table users={users} />
      </div>

    );
  }
}

export default Users;
