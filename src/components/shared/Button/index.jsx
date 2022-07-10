import style from "./style.module.css";

function Button({ children, primary, text, type }) {
  const classes = [
    style.btn,
    primary ? style.primary : "",
    text ? style.text : "",
  ].join(" ");

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
}

export default Button;
