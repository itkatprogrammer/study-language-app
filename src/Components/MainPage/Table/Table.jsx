import React from "react";
import TableRow from "../TableRow/TableRow";
import data from "./../../../data";
import st from "./Table.module.css";

export default function Table() {
  return (
    <div className={st.table}>
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
          {data.map((word) => (
            <TableRow key={word.id} {...word} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
