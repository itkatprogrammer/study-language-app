import React from "react";
import style from "./AddCell.module.scss";

export default function AddCell({inputId, inputTitle, InputName}) {
  return (
    <div className={style.addWordInput}>
      <label for={inputId}>{inputTitle}</label>
      <input type='text' name={InputName} id={inputId} />
    </div>
  );
}
