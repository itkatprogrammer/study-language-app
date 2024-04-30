import React from 'react';
import style from './AddCell.module.scss';

export default function AddCell({
  inputId,
  inputTitle,
  InputName,
  value,
  onChange,
}) {
  return (
    <div className={style.addWordInput}>
      <label htmlFor={inputId}>{inputTitle}</label>
      <input
        type='text'
        name={InputName}
        id={inputId}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

// import React from 'react';
// import style from './AddCell.module.scss';

// export default function AddCell({
//   inputId,
//   inputTitle,
//   InputName,
//   value,
//   onChange,
// }) {
//   const handleInputChange = (e) => {
//     onChange(inputId, e.target.value);
//   };

//   return (
//     <div className={style.addWordInput}>
//       <label htmlFor={inputId}>{inputTitle}</label>
//       <input
//         type='text'
//         name={InputName}
//         id={inputId}
//         value={value}
//         onChange={handleInputChange}
//       />
//     </div>
//   );
// }
