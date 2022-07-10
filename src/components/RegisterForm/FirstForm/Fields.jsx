import FieldGroup from "../shared/FieldGroup";
import Field from "../shared/Field";
import PasswordField from "./PasswordField";

function Fields() {
  return (
    <FieldGroup>
      <Field
        name="email"
        label="EMAIL"
        type="email"
        placeholder="Something ending with monterail.com"
        required
      />
      <PasswordField />
    </FieldGroup>
  );
}

export default Fields;
