import style from "./Button.module.scss";

export default function Button({ buttonName, type, onClick, disabled  }) {
  const buttonClasses = {
    edit: style.edit,
    save: style.save,
    cancel: style.cancel,
    delete: style.delete,
    add: style.add,
    disabled: style.disabled,
  };

  const handleClick = () => {
    onClick(type);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`${style.button} ${buttonClasses[type]} ${disabled ? buttonClasses.disabled : ""}`}
        disabled={disabled}
      >
        {buttonName}
      </button>
    </>
  )
}
