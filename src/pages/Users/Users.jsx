import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../api';
import Table from '../../components/Table/Table';
import { usersColumns } from './constants';
import { getMapUsers } from './utils';

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    setUsers(await API.user.getUsers());
  };

  const onUserRowClick = (userData) => {
    navigate(`/user?id=${userData.col1}`);
  };
  useEffect(() => {
    getUsers();
  }, []);
  if (users !== []) {
    const usersMap = users.map(({
      id, name, username, website, phone, email,
    }) => ({
      col1: id,
      col2: name,
      col3: username,
      col4: website,
      col5: phone,
      col6: email,
    }));
    return (
      <div>
        <Table columns={usersColumns} data={usersMap} onRowClick={onUserRowClick} />
      </div>
    );
  }
};

export default Users;
