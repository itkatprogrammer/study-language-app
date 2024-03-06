import React from "react";
import AddCell from "../AddCell/AddCell";
import Button from "./../Button/Button";
import st from "./AddWord.module.scss";

export default function AddWord() {
  return (
    <div className={st.addWordBox}>
      <AddCell
        inputTitle='English'
        InputName='inputName'
        inputId='englishInput'
      />
      <AddCell
        inputTitle='Transcription'
        InputName='inputName'
        inputId='transcriptionInput'
      />
      <AddCell
        inputTitle='Translation'
        InputName='inputName'
        inputId='translationInput'
      />

      <Button type='add' buttonName='Add' />
    </div>
  );
}
