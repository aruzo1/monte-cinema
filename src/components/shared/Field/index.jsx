import useRegisterForm from "../../../hooks/useRegisterForm";
import style from "./style.module.css";

function Field(props) {
  const { children, label, name, type, placeholder, valid, required } = props;
  const { values, dispatch } = useRegisterForm();

  function valueHandler(e) {
    dispatch({
      type: "SET_VALUE",
      payload: { name, value: e.currentTarget.value },
    });
  }

  return (
    <div className={style.field}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        className={valid === false ? style.invalid : ""}
        placeholder={placeholder}
        type={type}
        value={values[name]}
        onChange={valueHandler}
        required={required}
      />
      {children}
    </div>
  );
}

export default Field;
