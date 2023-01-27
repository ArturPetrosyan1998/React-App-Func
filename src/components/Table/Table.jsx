import { Component } from 'react';
import styles from './Table.module.scss';

class Table extends Component {
  render() {
    const { users } = this.props;

    return (
      <table>
        <tr>
          <th className={styles.th}>{users.map((user) => user.name)}</th>
        </tr>
        <tr>
          <th className={styles.th}>{users.map((user) => user.username)}</th>
        </tr>
        <tr>
          <th className={styles.th}>{users.map((user) => user.email)}</th>
        </tr>
        <tr>
          <th className={styles.th}>{users.map((user) => user.phone)}</th>
        </tr>
      </table>
    );
  }
}

export default Table;
