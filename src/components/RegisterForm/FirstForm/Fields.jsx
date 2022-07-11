import FieldGroup from "../shared/FieldGroup";
import Field from "../shared/Field";
import PasswordField from "./PasswordField";

function Fields() {
  return (
    <FieldGroup>
      <Field
        name="email"
        label="EMAIL"
        input={{
          type: "email",
          placeholder: "Something ending with monterail.com",
          required: true,
        }}
      />
      <PasswordField />
    </FieldGroup>
  );
}

export default Fields;
