import style from "./style.module.css";

function Button({ children, primary, text }) {
  const classes = [
    style.btn,
    primary ? style.primary : "",
    text ? style.text : "",
  ].join(" ");

  return <button className={classes}>{children}</button>;
}

export default Button;
