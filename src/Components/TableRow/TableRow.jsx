import React, { useState } from "react";
import Button from "./../Button/Button";
import st from "./TableRow.module.scss";

export default function TableRow({ id, word, transcription, translation }) {
  const [isEditing, setIsEditing] = useState(false);
  const handleClickEditBtn = (type) => {
    setIsEditing(type === "edit" ? true : false);
  };

  const [isCancelling, setisCancelling] = useState(false);
  const handleClickCancellBtn = (type) => {
    setisCancelling(type === "cancel" ? true : false);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{isEditing ? <input type='text' defaultValue={word} /> : word}</td>
      <td>
        {isEditing ? (
          <input type='text' defaultValue={transcription} />
        ) : (
          transcription
        )}
      </td>
      <td>
        {isEditing ? (
          <input type='text' defaultValue={translation} />
        ) : (
          translation
        )}
      </td>
      <td className={st.buttonManage}>
        {isEditing ? (
          <>
            <Button type='save' buttonName='save' />
            <Button
              type='cancel'
              buttonName='cancel'
              onClick={handleClickCancellBtn}
            />
          </>
        ) : (
          <>
            <Button
              type='edit'
              buttonName='edit'
              onClick={handleClickEditBtn}
            />
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
