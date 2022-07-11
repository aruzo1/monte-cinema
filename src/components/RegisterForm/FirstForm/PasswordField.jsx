import usePasswordField from "../../../hooks/usePasswordField";
import Field from "../shared/Field";
import Eye from "./Eye";
import style from "./style.module.css";

const pattern = "(?=.*[0-9])(?=.*[a-z]).{8,}";

const validators = [
  { text: "At least 8 characters", expression: ".{8,}" },
  { text: "At least one letter", expression: "[a-zA-Z]" },
  { text: "At least one digit", expression: "[0-9]" },
];

function PasswordField() {
  const { show, toggleShow, valid, validatorValid } = usePasswordField(pattern);

  return (
    <Field
      name="password"
      label="PASSWORD"
      valid={valid}
      input={{
        type: show ? "text" : "password",
        placeholder: "Enter your password",
        pattern,
        required: true,
      }}
    >
      <Eye onClick={toggleShow} />
      <ul className={style.validators}>
        {validators.map(({ text, expression }) => (
          <li
            key={text}
            className={validatorValid(expression) ? style.valid : style.invalid}
          >
            {text}
          </li>
        ))}
      </ul>
    </Field>
  );
}

export default PasswordField;
