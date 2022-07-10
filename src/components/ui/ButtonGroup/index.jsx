import style from "./style.module.css";

function ButtonGroup({ children }) {
  return <div className={style["btn-group"]}>{children}</div>;
}

export default ButtonGroup;
