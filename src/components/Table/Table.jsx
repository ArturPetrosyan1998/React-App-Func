import { Component } from 'react';
import styles from './Table.module.scss';

class Table extends Component {
  render() {
    const { users } = this.props;
    return (

      <table key="table">
        <thead>
          <tr className={styles.tr}>
            <td className={styles.td}>Names</td>
            <td className={styles.td}>Usernames</td>
            <td className={styles.td}>Emails</td>
            <td className={styles.td}>Web Sites</td>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr className={styles.tr}>
              <td key={item.id} className={styles.td}>{item.name}</td>
              <td key={item.id} className={styles.td}>{item.username}</td>
              <td key={item.id} className={styles.td}>{item.email}</td>
              <td key={item.id} className={styles.td}>{item.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
