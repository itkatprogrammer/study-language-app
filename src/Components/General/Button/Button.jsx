import st from "./Button.module.scss";

export default function Button(props) {
  const buttonClasses = {
    edit: st.edit,
    save: st.save,
    cancel: st.cancel,
    delete: st.delete,
    add: st.add,
  };

  const handleClick = () => {
    props.onClick(props.type);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`${st.button} ${buttonClasses[props.type]}`}
      >
        {props.buttonName}
      </button>
    </>
  );
}
