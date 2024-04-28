import TableRow from './../TableRow/TableRow';
// import data from './../../../data';
import style from './Table.module.css';
import { DataServerContext } from '../../../context/DataServerContext';
import { useContext } from 'react';

export default function Table() {
  const { dataServer, setDataServer } = useContext(DataServerContext);

  function deleteDataRow(id) {
    const filterData = dataServer.filter((user) => user.id !== id);
    setDataServer(filterData);
  }

  return (
    <div className={style.table}>
      <table className='table'>
        <thead>
          <tr>
            <th className='table__title'>№</th>
            <th className='table__title'>Word</th>
            <th className='table__title'>Transcription</th>
            <th className='table__title'>Translation</th>
            <th className='table__title'>Manage</th>
          </tr>
        </thead>
        <tbody>
          {dataServer &&
            dataServer.map((word) => (
              <TableRow
                key={word.id}
                {...word}
                deleteDataRow={() => deleteDataRow(word.id)}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
