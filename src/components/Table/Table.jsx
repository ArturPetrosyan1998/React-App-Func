import { Component } from 'react';
import styles from './Table.module.scss';

class Table extends Component {
  render() {
    const { data, columns } = this.props;
    console.log(data);
    return (
      <table>
        <thead>
          <tr>
            {columns.map(((item) => <th key={item.accessor}>{item.Header}</th>))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column, index) => <td key={index}>{item[`col${index + 1}`]}</td>)}
            </tr>
          ))}
        </tbody>
        <tfoot />
      </table>

    );
  }
}

export default Table;
