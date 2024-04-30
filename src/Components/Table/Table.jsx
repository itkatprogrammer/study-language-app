import TableRow from '../TableRow/TableRow';
import style from './Table.module.css';
import { WordContext } from '../../context/WordContext';
import { useContext } from 'react';

export default function Table() {
  const { words, deleteWord } = useContext(WordContext);

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
          {words &&
            words.map((word) => (
              <TableRow
                key={word.id}
                {...word}
                deleteDataRow={() => deleteWord(word.id)}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

// import TableRow from './../TableRow/TableRow';
// import style from './Table.module.css';
// import { WordServerContext } from '../../../context/WordServerContext';
// import { useContext } from 'react';

// export default function Table() {
//   const { dataServer, setDataServer } = useContext(WordServerContext);

//   const handleDeleteRow = async (wordId) => {
//     try {
//       const resp = await fetch(
//         `http://itgirlschool.justmakeit.ru/api/words/${wordId}`,
//         {
//           method: 'DELETE',
//         }
//       );

//       if (!resp.ok) {
//         throw new Error('Failled to delete table tow');
//       }

//       console.log(resp.status);

//       //Света: если задача успешно удалена на сервере, удаляем ее локально
//       setDataServer(dataServer.filter((word) => word.id !== wordId));
//     } catch (error) {
//       console.error('Error deleting table row', error);
//     }
//   };

//   return (
//     <div className={style.table}>
//       <table className='table'>
//         <thead>
//           <tr>
//             <th className='table__title'>№</th>
//             <th className='table__title'>Word</th>
//             <th className='table__title'>Transcription</th>
//             <th className='table__title'>Translation</th>
//             <th className='table__title'>Manage</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dataServer &&
//             dataServer.map((word) => (
//               <TableRow
//                 key={word.id}
//                 {...word}
//                 deleteDataRow={() => handleDeleteRow(word.id)}
//               />
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
