import { useState } from "react";

function usePasswordField(validators) {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  function isPasswordValid() {
    for (const { expression } of validators) {
      if (!isValidatorValid(expression)) return false;
    }
    return true;
  }

  function isValidatorValid(expression) {
    const regex = new RegExp(expression, "g");
    return regex.test(password);
  }

  return {
    password,
    setPassword,
    show,
    toggleShow,
    isPasswordValid,
    isValidatorValid,
  };
}

export default usePasswordField;
