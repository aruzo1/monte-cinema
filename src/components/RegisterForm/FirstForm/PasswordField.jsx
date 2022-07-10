import usePasswordField from "../../../hooks/usePasswordField";
import Field from "../shared/Field";
import Eye from "./Eye";
import style from "./style.module.css";

const validators = [
  { text: "At least 8 characters", expression: /.{8,}/ },
  { text: "At least one letter", expression: /[a-zA-Z]/ },
  { text: "At least one digit", expression: /\d/ },
];

function PasswordField() {
  const { show, toggleShow, isPasswordValid, isValidatorValid } =
    usePasswordField(validators);

  return (
    <Field
      name="password"
      label="PASSWORD"
      type={show ? "text" : "password"}
      placeholder="Enter your password"
      valid={isPasswordValid()}
      required
    >
      <Eye onClick={toggleShow} />
      <ul className={style.validators}>
        {validators.map(({ text, expression }) => (
          <li
            key={text}
            className={
              isValidatorValid(expression) ? style.valid : style.invalid
            }
          >
            {text}
          </li>
        ))}
      </ul>
    </Field>
  );
}

export default PasswordField;
