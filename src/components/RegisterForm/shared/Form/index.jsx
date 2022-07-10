import useRegisterForm from "../../../../hooks/useRegisterForm";
import style from "./style.module.css";

function Form({ title, children }) {
  const { dispatch } = useRegisterForm();

  function submitHandler(e) {
    e.preventDefault();
    dispatch({ type: "NEXT_STEP" });
  }

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>
        {title.text} <span>{title.highlight}</span>
      </h1>
      <form className={style.form} onSubmit={submitHandler}>
        {children}
      </form>
    </div>
  );
}

export default Form;
