import React, { useState, useContext } from 'react';
import Button from '../General/Button/Button';
import style from './TableRow.module.scss';
import { WordContext } from '../../context/WordContext';

export default function TableRow({
  id,
  english,
  transcription,
  russian,
  deleteDataRow,
}) {
  const { updateWord } = useContext(WordContext);

  const [isEditing, setIsEditing] = useState(false);

  const [editedEnglish, setEditedEnglish] = useState(english);
  const [editedTranscription, setEditedTranscription] = useState(transcription);
  const [editedRussian, setEditedRussian] = useState(russian);

  const [englishError, setEnglishError] = useState(false);
  const [transcriptionError, setTranscriptionError] = useState(false);
  const [russianError, setRussianError] = useState(false);

  const sumEnglishErrors = (e) => {
    const value = e.target.value;
    setEnglishError(!/^[a-zA-Z ]*$/.test(value) || !value.trim());
  };

  const sumTranscriptionErrors = (e) => {
    const value = e.target.value;
    setTranscriptionError(!/\[.*\]/.test(value) || !value.trim());
  };

  const sumRussianErrors = (e) => {
    const value = e.target.value;
    setRussianError(!/^[а-яА-Я ]*$/.test(value) || !value.trim());
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedEnglish(english);
    setEditedTranscription(transcription);
    setEditedRussian(russian);
  };

  const handleSave = async () => {
    const updatedData = {
      id,
      english: editedEnglish,
      transcription: editedTranscription,
      russian: editedRussian,
    };

    updateWord(id, updatedData);

    setIsEditing(false);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>
        {isEditing ? (
          <input
            type='text'
            name='english'
            className={englishError ? style.borderError : ''}
            value={editedEnglish}
            placeholder={englishError ? 'Данное поле не заполнено' : ''}
            onChange={(e) => {
              setEditedEnglish(e.target.value);
              sumEnglishErrors(e);
            }}
          />
        ) : (
          editedEnglish
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
              sumTranscriptionErrors(e);
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
            name='russian'
            className={russianError ? style.borderError : ''}
            value={editedRussian}
            placeholder={russianError ? 'Данное поле не заполнено' : ''}
            onChange={(e) => {
              setEditedRussian(e.target.value);
              sumRussianErrors(e);
            }}
          />
        ) : (
          editedRussian
        )}
      </td>
      <td className={style.buttonManage}>
        {isEditing ? (
          <>
            <Button
              type='save'
              buttonName='save'
              onClick={handleSave}
              disabled={englishError || transcriptionError || russianError}
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
