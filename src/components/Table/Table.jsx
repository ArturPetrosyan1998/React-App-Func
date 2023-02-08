import styles from './Table.module.scss';

const Table = ({ data, columns, onRowClick }) => (
  <table className={styles.table}>
    <thead>
      <tr className={styles.tr}>
        {columns.map(((item) => <th className={styles.th} key={item.accessor}>{item.Header}</th>))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr
          className={styles.tr}
          key={index}
          onClick={() => {
            onRowClick(item);
          }}
        >
          {columns.map((_, index) => <td className={styles.td} key={index}>{item[`col${index + 1}`]}</td>)}
        </tr>
      ))}
    </tbody>
    <tfoot />
  </table>
);

export default Table;
