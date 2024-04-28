import React, { useState } from 'react';
import Button from './../../../components/General/Button/Button';
import style from './TableRow.module.scss';

export default function TableRow({
  id,
  english,
  transcription,
  translation,
  deleteDataRow,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [editedWord, setEditedWord] = useState(english);
  const [editedTranscription, setEditedTranscription] = useState(transcription);
  const [editedTranslation, setEditedTranslation] = useState(translation);

  const [wordError, setWordError] = useState(false);
  const [transcriptionError, setTranscriptionError] = useState(false);
  const [translationError, setTranslationError] = useState(false);

  // const [latinInput, setLatinInput] = useState('');
  // const [bracketsInput, setBracketsInput] = useState('');
  // const [cyrillicInput, setCyrillicInput] = useState('');

  const handleCancel = () => {
    setIsEditing(false);
    setEditedWord(word);
    setEditedTranscription(transcription);
    setEditedTranslation(translation);
  };

  // const handleSave = () => {
  //   const updatedData = {
  //     id,
  //     english: editedWord,
  //     transcription: editedTranscription,
  //     translation: editedTranslation,
  //   };
  //   setIsEditing(false);
  // };

  const handleSave = async () => {
    const updatedData = {
      id,
      english: editedWord,
      transcription: editedTranscription,
      translation: editedTranslation,
    };

    try {
      const resp = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}/update`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (!resp.ok) {
        throw new Error('Failed to update data');
      }

      setIsEditing(false);
    } catch (error) {
      console.error('Error updating data', error);
    }
  };

  // const handleLatinInputChange = (e) => {
  //   const value = e.target.value;
  //   if (/^[a-zA-Z ]*$/.test(value)) {
  //     setLatinInput(value);
  //   }
  // };

  // const handleBracketsInputChange = (e) => {
  //   const value = e.target.value;
  //   if (/\[.*\]/.test(value)) {
  //     setBracketsInput(value);
  //   }
  // };

  // const handleCyrillicInputChange = (e) => {
  //   const value = e.target.value;
  //   if (/^[а-яА-Я ]*$/.test(value)) {
  //     setCyrillicInput(value);
  //   }
  // };

  return (
    <tr>
      <td>{id}</td>
      <td>
        {isEditing ? (
          <input
            type='text'
            name='word'
            className={wordError ? style.borderError : ''}
            value={editedWord}
            placeholder={wordError ? 'Данное поле не заполнено' : ''}
            onChange={(e) => {
              setEditedWord(e.target.value);
              setWordError(!e.target.value.trim() || e.target.value.trim());
              // handleLatinInputChange(e);
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
              // handleBracketsInputChange(e);
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
              // handleCyrillicInputChange(e);
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
              disabled={
                wordError || transcriptionError || translationError
                // latinInput ||
                // bracketsInput ||
                // cyrillicInput
              }
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
