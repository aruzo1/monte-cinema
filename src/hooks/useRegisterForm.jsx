import { useContext } from "react";
import { RegisterFormContext } from "../components/RegisterForm";

function useRegisterForm() {
  return useContext(RegisterFormContext);
}

export default useRegisterForm;
