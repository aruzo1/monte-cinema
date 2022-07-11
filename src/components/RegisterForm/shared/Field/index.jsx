import useRegisterForm from "../../../../hooks/useRegisterForm";
import style from "./style.module.css";

function Field(props) {
  const { children, label, name, valid, input } = props;
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
        {...input}
        id={name}
        name={name}
        className={valid === false ? style.invalid : ""}
        value={values[name]}
        onChange={valueHandler}
      />
      {children}
    </div>
  );
}

export default Field;
