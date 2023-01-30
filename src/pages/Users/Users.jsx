import { Component } from 'react';
import Header from '../../components/Header/Header';
import styles from './Users.module.scss';
import { API } from '../../api';
import Table from '../../components/Table/Table';

class Users extends Component {
  state = {
    users: [],
    posts: [],
  };

  componentDidMount() {
    console.log('ok');
    this.getUsers();
    this.getPosts();
  }

  getUsers = async () => {
    const users = await API.user.getUsers();
    this.setState({ users });
  };

  getPosts = async () => {
    const posts = await API.post.getPosts();
    this.setState({ posts });
  };

  render() {
    const { users, posts } = this.state;
    const usersData = users.map(({
      id, name, username, website, phone, email,
    }) => ({
      col1: id,
      col2: name,
      col3: username,
      col4: website,
      col5: phone,
      col6: email,
    }));

    const postsData = posts.map(({
      id, userId, body, title,
    }) => ({
      col1: id,
      col2: userId,
      col3: body,
      col4: title,
    }));

    const usersColumns = [
      { Header: 'Id', accessor: 'col1' },
      { Header: 'Name', accessor: 'col2' },
      { Header: 'User Name', accessor: 'col3' },
      { Header: 'Website', accessor: 'col4' },
      { Header: 'Phone', accessor: 'col5' },
      { Header: 'Email', accessor: 'col6' },
    ];
    const postColumns = [
      { Header: 'Id', accessor: 'col1' },
      { Header: 'User ID', accessor: 'col2' },
      { Header: 'Body', accessor: 'col3' },
      { Header: 'Title', accessor: 'col4' },
    ];
    return (
      <div>
        <Header onClick={this.handleToggleAside} className="header" />
        <Table columns={usersColumns} data={usersData} />
        <Table columns={postColumns} data={postsData} />
      </div>

    );
  }
}

export default Users;
