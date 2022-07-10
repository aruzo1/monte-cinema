import { useState } from "react";
import useRegisterForm from "./useRegisterForm";

function usePasswordField(validators) {
  const { values } = useRegisterForm();
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
    return regex.test(values["password"]);
  }

  return {
    show,
    toggleShow,
    isPasswordValid,
    isValidatorValid,
  };
}

export default usePasswordField;
