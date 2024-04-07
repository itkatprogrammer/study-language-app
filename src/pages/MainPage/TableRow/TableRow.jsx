import React, { useState } from "react";
import Button from "./../../../components/General/Button/Button";
import style from "./TableRow.module.scss";

export default function TableRow({ id, word, transcription, translation }) {
  const [isEditing, setIsEditing] = useState(false);
  
  const [editedWord, setEditedWord] = useState(word);
  const [editedTranscription, setEditedTranscription] = useState(transcription);
  const [editedTranslation, setEditedTranslation] = useState(translation);

  const [errors, setErrors] = useState({
    name: false,
    transcription: false,
    translation: false
  });

  const isBtnDisabled = Object.values(errors).some((elem) => elem)


  const handleCancel = () => {
    setIsEditing(false);
    setEditedWord(word);
    setEditedTranscription(transcription);
    setEditedTranslation(translation);
  };

  const handleSave = () => {
    const nameError = !editedWord;
    const transcriptionError = !editedTranscription;
    const translationError = !editedTranslation;
  
    if (nameError || transcriptionError || translationError) {
      console.log('Ошибка: Все поля должны быть заполнены');
    } else {
      console.log('Успешно сохранено:', {
        id,
        word: editedWord,
        transcription: editedTranscription,
        translation: editedTranslation
      });
  
      setIsEditing(false);
    }
  
    setErrors({
      name: nameError,
      transcription: transcriptionError,
      translation: translationError
    });
};

  return (
    <tr>
      <td>{id}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="name"
            className={errors.name ? style.borderError : ""}
            value={editedWord}
            placeholder={errors.name ? "Данное поле не заполнено" : ""}
            onChange={(e) => {
              setEditedWord(e.target.value);
              setErrors({ ...errors, name: !e.target.value.trim() });
            }}
          />
        ) : (
          editedWord
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="transcription"
            className={errors.transcription ? style.borderError : ""}
            value={editedTranscription}
            placeholder={errors.transcription ? "Данное поле не заполнено" : ""}
            onChange={(e) => {
              setEditedTranscription(e.target.value);
              setErrors({ ...errors, transcription: !e.target.value.trim() });
            }}
          />
        ) : (
          editedTranscription
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="translation"
            className={errors.translation ? style.borderError : ""}
            value={editedTranslation}
            placeholder={errors.translation ? "Данное поле не заполнено" : ""}
            onChange={(e) => {
              setEditedTranslation(e.target.value);
              setErrors({ ...errors, translation: !e.target.value.trim() });
            }}
          />
        ) : (
          editedTranslation
        )}
      </td>
      <td className={style.buttonManage}>
        {isEditing ? (
          <>
            <Button type="save" buttonName="save" onClick={handleSave} disabled={isBtnDisabled} />
            <Button type="cancel" buttonName="cancel" onClick={handleCancel} />
          </>
        ) : (
          <>
            <Button type="edit" buttonName="edit" onClick={() => setIsEditing(true)} />
            <Button type="delete" buttonName="delete" />
          </>
        )}
      </td>
    </tr>
  );
}