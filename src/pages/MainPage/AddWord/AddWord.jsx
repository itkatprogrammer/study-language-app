import React from "react";
import AddCell from "../AddCell/AddCell";
import Button from './../../../components/General/Button/Button'
import style from "./AddWord.module.scss";

export default function AddWord() {
  return (
    <div className={style.addWordBox}>
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
