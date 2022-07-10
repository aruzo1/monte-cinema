import style from "./style.module.css";

function Field(props) {
  const { children, value, setValue, name, type, valid, required } = props;

  function valueHandler(e) {
    setValue(e.currentTarget.value);
  }

  return (
    <div className={style.field}>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        className={valid === false ? style.invalid : ""}
        name={name}
        type={type}
        value={value}
        onChange={valueHandler}
        required={required}
      />
      {children}
    </div>
  );
}

export default Field;
