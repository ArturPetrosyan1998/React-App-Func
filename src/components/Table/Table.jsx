import classNames from 'classnames';
import { Component } from 'react';
import styles from './Table.module.scss';

class Table extends Component {
  render() {
    const { data, columns, onRowClick } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {columns.map(((item) => <th key={item.accessor}>{item.Header}</th>))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              onClick={() => {
                onRowClick(item);
              }}
            >
              {columns.map((_, index) => <td key={index}>{item[`col${index + 1}`]}</td>)}
            </tr>
          ))}
        </tbody>
        <tfoot />
      </table>
    );
  }
}

export default Table;
