import { Component } from 'react';
import Header from '../../components/Header/Header';
import { API } from '../../api';
import Table from '../../components/Table/Table';
import { usersColumns } from './constants';
import { getMapUsers } from './utils';
import { withRouter } from '../../hocs/withRouter';

class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const users = await API.user.getUsers();
    this.setState({ users });
  };

  onUserRowClick = () => [

  ];

  render() {
    const { users } = this.state;
    return (
      <div>
        <Header onClick={this.handleToggleAside} className="header" />
        <Table columns={usersColumns} data={getMapUsers(users)} onRowClick={this.onUserRowClick} />
      </div>

    );
  }
}

export default withRouter(Users);
