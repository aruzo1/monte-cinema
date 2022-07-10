import style from "./style.module.css";

function FieldGroup({ children }) {
  return <div className={style.fields}>{children}</div>;
}

export default FieldGroup;
