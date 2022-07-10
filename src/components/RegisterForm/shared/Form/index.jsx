import useRegisterForm from "../../../../hooks/useRegisterForm";
import Title from "../Title";
import style from "./style.module.css";

function Form({ title, children }) {
  const { dispatch } = useRegisterForm();

  function submitHandler(e) {
    e.preventDefault();
    dispatch({ type: "NEXT_STEP" });
  }

  return (
    <div className={style.wrapper}>
      <Title {...title} />
      <form className={style.form} onSubmit={submitHandler}>
        {children}
      </form>
    </div>
  );
}

export default Form;
