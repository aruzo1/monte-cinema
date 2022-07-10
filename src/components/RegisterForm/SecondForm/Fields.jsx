import FieldGroup from "../shared/FieldGroup";
import Field from "../shared/Field";

function Fields() {
  return (
    <FieldGroup>
      <Field
        name="firstName"
        label="FIRST NAME"
        placeholder="e.g. Jessica"
        required
      />
      <Field
        name="lastName"
        label="LAST NAME"
        placeholder="e.g. Walton"
        required
      />
      <Field name="dateOfBirth" label="DAY OF BIRTH" type="date" required />
    </FieldGroup>
  );
}

export default Fields;
