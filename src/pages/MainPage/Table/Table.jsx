import React, { useState } from 'react';
import TableRow from './../TableRow/TableRow';
import data from './../../../data';
import style from './Table.module.css';

export default function Table() {
  const [dataRow, setDataRow] = useState(data);

  const deleteDataRow = (id) => {
    setDataRow((prevDataRow) => prevDataRow.filter((word) => word.id !== id));
  };

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
          {dataRow.map((word) => (
            <TableRow key={word.id} {...word} deleteDataRow={deleteDataRow} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
