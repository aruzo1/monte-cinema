import { createContext } from "react";
import useRegisterFormReducer from "../../hooks/useRegisterFormReducer";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import SuccessMessage from "./SuccessMessage";

export const RegisterFormContext = createContext();

function RegisterForm() {
  const [values, dispatch] = useRegisterFormReducer();

  return (
    <RegisterFormContext.Provider value={{ values, dispatch }}>
      {[<FirstForm />, <SecondForm />, <SuccessMessage />][values.step]}
    </RegisterFormContext.Provider>
  );
}

export default RegisterForm;
