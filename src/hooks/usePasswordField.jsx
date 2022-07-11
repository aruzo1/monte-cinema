import { useMemo, useState } from "react";
import useRegisterForm from "./useRegisterForm";

function usePasswordField(pattern) {
  const { values } = useRegisterForm();
  const [show, setShow] = useState(false);

  const valid = useMemo(() => {
    return new RegExp(pattern).test(values.password);
  }, [pattern, values]);

  function validatorValid(expression) {
    return new RegExp(expression).test(values.password);
  }

  function toggleShow() {
    setShow(!show);
  }

  return {
    show,
    toggleShow,
    valid,
    validatorValid,
  };
}

export default usePasswordField;
