import React, { useState } from "react";
import Button from "./../../General/Button/Button";
import st from "./TableRow.module.scss";

export default function TableRow({ id, word, transcription, translation }) {
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = (type) => {
    setIsEditing(type === "edit" ? true : false);
  };

  // const [isCancelling, setIsCancelling] = useState(false);
  // const handleCancel = (type) => {
  //   setIsCancelling(type === "cancel" ? true : false);
  // };

  const [editedWord, setEditedWord] = useState(word);
  const [editedTranscription, setEditedTranscription] = useState(transcription);
  const [editedTranslation, setEditedTranslation] = useState(translation);

  const handleCancel = () => {
    setIsEditing(false);
    setEditedWord(word);
    setEditedTranscription(transcription);
    setEditedTranslation(translation);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>
        {isEditing ? (
          <input
            type='text'
            value={editedWord}
            onChange={(e) => setEditedWord(e.target.value)}
          />
        ) : (
          editedWord
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type='text'
            value={editedTranscription}
            onChange={(e) => {
              setEditedTranscription(e.target.value);
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
            value={editedTranslation}
            onChange={(e) => {
              setEditedTranslation(e.target.value);
            }}
          />
        ) : (
          editedTranslation
        )}
      </td>
      <td className={st.buttonManage}>
        {isEditing ? (
          <>
            <Button type='save' buttonName='save' onClick={handleSave} />
            <Button type='cancel' buttonName='cancel' onClick={handleCancel} />
          </>
        ) : (
          <>
            <Button type='edit' buttonName='edit' onClick={handleEdit} />
            <Button type='delete' buttonName='delete' />
          </>
        )}
      </td>
    </tr>
  );
}

{
  /* <Button type='edit' buttonName='edit' />
        <Button type='delete' buttonName='delete' /> */
}
