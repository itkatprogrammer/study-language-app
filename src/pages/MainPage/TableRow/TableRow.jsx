// import React, { useState } from 'react';
// import Button from './../../../components/General/Button/Button';
// import style from './TableRow.module.scss';

// export default function TableRow({
//   id,
//   word,
//   transcription,
//   translation,
//   deleteDataRow,
// }) {
//   const [isEditing, setIsEditing] = useState(false);

//   const [editedWord, setEditedWord] = useState(word);
//   const [editedTranscription, setEditedTranscription] = useState(transcription);
//   const [editedTranslation, setEditedTranslation] = useState(translation);

//   const [errors, setErrors] = useState({
//     name: false,
//     transcription: false,
//     translation: false,
//   });

//   const isBtnDisabled = Object.values(errors).some((elem) => elem);

//   const handleCancel = () => {
//     setIsEditing(false);
//     setEditedWord(word);
//     setEditedTranscription(transcription);
//     setEditedTranslation(translation);
//   };

//   const handleSave = () => {
//     const nameError = !editedWord;
//     const transcriptionError = !editedTranscription;
//     const translationError = !editedTranslation;

//     if (nameError || transcriptionError || translationError) {
//       console.log('Ошибка: Все поля должны быть заполнены');
//     } else {
//       console.log('Успешно сохранено:', {
//         id,
//         word: editedWord,
//         transcription: editedTranscription,
//         translation: editedTranslation,
//       });

//       setIsEditing(false);
//     }

//     setErrors({
//       name: nameError,
//       transcription: transcriptionError,
//       translation: translationError,
//     });
//   };

//   return (
//     <tr>
//       <td>{id}</td>
//       <td>
//         {isEditing ? (
//           <input
//             type='text'
//             name='name'
//             className={errors.name ? style.borderError : ''}
//             value={editedWord}
//             placeholder={errors.name ? 'Данное поле не заполнено' : ''}
//             onChange={(e) => {
//               setEditedWord(e.target.value);
//               setErrors({ ...errors, name: !e.target.value.trim() });
//             }}
//           />
//         ) : (
//           editedWord
//         )}
//       </td>
//       <td>
//         {isEditing ? (
//           <input
//             type='text'
//             name='transcription'
//             className={errors.transcription ? style.borderError : ''}
//             value={editedTranscription}
//             placeholder={errors.transcription ? 'Данное поле не заполнено' : ''}
//             onChange={(e) => {
//               setEditedTranscription(e.target.value);
//               setErrors({ ...errors, transcription: !e.target.value.trim() });
//             }}
//           />
//         ) : (
//           editedTranscription
//         )}
//       </td>
//       <td>
//         {isEditing ? (
//           <input
//             type='text'
//             name='translation'
//             className={errors.translation ? style.borderError : ''}
//             value={editedTranslation}
//             placeholder={errors.translation ? 'Данное поле не заполнено' : ''}
//             onChange={(e) => {
//               setEditedTranslation(e.target.value);
//               setErrors({ ...errors, translation: !e.target.value.trim() });
//             }}
//           />
//         ) : (
//           editedTranslation
//         )}
//       </td>
//       <td className={style.buttonManage}>
//         {isEditing ? (
//           <>
//             <Button
//               type='save'
//               buttonName='save'
//               onClick={handleSave}
//               disabled={isBtnDisabled}
//             />
//             <Button type='cancel' buttonName='cancel' onClick={handleCancel} />
//           </>
//         ) : (
//           <>
//             <Button
//               type='edit'
//               buttonName='edit'
//               onClick={() => setIsEditing(true)}
//             />
//             <Button
//               type='delete'
//               buttonName='delete'
//               onClick={() => deleteDataRow(id)}
//             />
//           </>
//         )}
//       </td>
//     </tr>
//   );
// }

import React, { useState } from 'react';
import Button from './../../../components/General/Button/Button';
import style from './TableRow.module.scss';

export default function TableRow({
  id,
  word,
  transcription,
  translation,
  deleteDataRow,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [editedWord, setEditedWord] = useState(word);
  const [editedTranscription, setEditedTranscription] = useState(transcription);
  const [editedTranslation, setEditedTranslation] = useState(translation);

  const [wordError, setWordError] = useState(false);
  const [transcriptionError, setTranscriptionError] = useState(false);
  const [translationError, setTranslationError] = useState(false);

  const handleCancel = () => {
    setIsEditing(false);
    setEditedWord(word);
    setEditedTranscription(transcription);
    setEditedTranslation(translation);
  };

  const handleSave = () => {
    const updatedData = {
      id,
      word: editedWord,
      transcription: editedTranscription,
      translation: editedTranslation,
    };
    setIsEditing(false);
  };

  const handleLatinInputChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z ]*$/.test(value)) {
      setLatinInput(value);
    }
  };

  const handleBracketsInputChange = (e) => {
    const value = e.target.value;
    if (/\[.*\]/.test(value)) {
      setBracketsInput(value);
    }
  };

  const handleCyrillicInputChange = (e) => {
    const value = e.target.value;
    if (/^[а-яА-Я ]*$/.test(value)) {
      setCyrillicInput(value);
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>
        {isEditing ? (
          <input
            type='text'
            name='name'
            className={wordError ? style.borderError : ''}
            value={editedWord}
            placeholder={wordError ? 'Данное поле не заполнено' : ''}
            onChange={(e) => {
              setEditedWord(e.target.value);
              setWordError(!e.target.value.trim() || e.target.value.trim());
              handleLatinInputChange(e);
            }}
          />
        ) : (
          editedWord
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type='text'
            name='transcription'
            className={transcriptionError ? style.borderError : ''}
            value={editedTranscription}
            placeholder={transcriptionError ? 'Данное поле не заполнено' : ''}
            onChange={(e) => {
              setEditedTranscription(e.target.value);
              setTranscriptionError(!e.target.value.trim());
              handleBracketsInputChange(e);
            }}
          />
        ) : (
          editedTranscription
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type='text'
            name='translation'
            className={translationError ? style.borderError : ''}
            value={editedTranslation}
            placeholder={translationError ? 'Данное поле не заполнено' : ''}
            onChange={(e) => {
              setEditedTranslation(e.target.value);
              setTranslationError(!e.target.value.trim());
              handleCyrillicInputChange(e);
            }}
          />
        ) : (
          editedTranslation
        )}
      </td>
      <td className={style.buttonManage}>
        {isEditing ? (
          <>
            <Button
              type='save'
              buttonName='save'
              onClick={handleSave}
              disabled={wordError || transcriptionError || translationError}
            />
            <Button type='cancel' buttonName='cancel' onClick={handleCancel} />
          </>
        ) : (
          <>
            <Button
              type='edit'
              buttonName='edit'
              onClick={() => setIsEditing(true)}
            />
            <Button
              type='delete'
              buttonName='delete'
              onClick={() => deleteDataRow(id)}
            />
          </>
        )}
      </td>
    </tr>
  );
}
