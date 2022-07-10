import style from "./style.module.css";

function Form({ children, title, ref }) {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>
        {title.text} <span>{title.highlight}</span>
      </h1>
      <form className={style.form} ref={ref}>
        {children}
      </form>
    </div>
  );
}

export default Form;
