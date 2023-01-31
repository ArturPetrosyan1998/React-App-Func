import { Component } from 'react';
import Header from '../../components/Header/Header';
import styles from './Users.module.scss';
import { API } from '../../api';
import Table from '../../components/Table/Table';
import { usersColumns } from './constants';
import { getMapUsers } from './utils';

class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    console.log('ok');
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
        <Table columns={usersColumns} data={getMapUsers(users)} />
      </div>

    );
  }
}

export default Users;
