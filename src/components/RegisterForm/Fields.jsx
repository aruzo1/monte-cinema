import { useState } from "react";
import FieldGroup from "../ui/FieldGroup";
import Field from "../ui/Field";
import PasswordField from "./PasswordField";

function Fields() {
  const [email, setEmail] = useState("");

  return (
    <FieldGroup>
      <Field
        value={email}
        setValue={setEmail}
        name="email"
        type="email"
        required
      />
      <PasswordField />
    </FieldGroup>
  );
}

export default Fields;
