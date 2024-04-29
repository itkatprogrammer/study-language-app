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

  const sumWordErrors = (e) => {
    const value = e.target.value;
    setWordError(!/^[a-zA-Z ]*$/.test(value) || !value.trim());
  };

  const sumTranscriptionErrors = (e) => {
    const value = e.target.value;
    setTranscriptionError(!/\[.*\]/.test(value) || !value.trim());
  };

  const sumTranslationErrors = (e) => {
    const value = e.target.value;
    setTranslationError(!/^[а-яА-Я ]*$/.test(value) || !value.trim());
  };

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
              sumWordErrors(e);
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
            name='translation'
            className={translationError ? style.borderError : ''}
            value={editedTranslation}
            placeholder={translationError ? 'Данное поле не заполнено' : ''}
            onChange={(e) => {
              setEditedTranslation(e.target.value);
              sumTranslationErrors(e);
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
