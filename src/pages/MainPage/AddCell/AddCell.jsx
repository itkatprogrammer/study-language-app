import React from "react";
import st from "./AddCell.module.scss";

export default function AddCell(props) {
  return (
    <div className={st.addWordInput}>
      <label for={props.inputId}>{props.inputTitle}</label>
      <input type='text' name={props.InputName} id={props.inputId} />
    </div>
  );
}
