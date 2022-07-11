import style from "./style.module.css";

function Title({ text, highlight }) {
  return (
    <h1 className={style.title}>
      {text}
      {highlight && <span>{highlight}</span>}
    </h1>
  );
}

export default Title;
