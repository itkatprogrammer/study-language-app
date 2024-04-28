import React from 'react';
import style from './AddCell.module.scss';

export default function AddCell({ inputId, inputTitle, InputName, onChange }) {
  const handleInputChange = (e) => {
    onChange(inputId, e.target.value);
  };

  return (
    <div className={style.addWordInput}>
      <label for={inputId}>{inputTitle}</label>
      <input
        type='text'
        name={InputName}
        id={inputId}
        onChange={handleInputChange}
      />
    </div>
  );
}
