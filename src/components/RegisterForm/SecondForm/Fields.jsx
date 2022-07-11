import FieldGroup from "../shared/FieldGroup";
import Field from "../shared/Field";
import style from "./style.module.css";

function Fields() {
  return (
    <FieldGroup>
      <Field
        name="firstName"
        label="FIRST NAME"
        input={{ placeholder: "e.g. Jessica", required: true }}
      />
      <Field
        name="lastName"
        label="LAST NAME"
        input={{ placeholder: "e.g. Walton", required: true }}
      />
      <Field
        name="dateOfBirth"
        label="DAY OF BIRTH"
        input={{ type: "date", required: true }}
      />
      <div className={style.checkbox}>
        <input id="policy" type="checkbox" required />
        <label htmlFor="policy">
          I accept <a href="/">Privacy Policy</a>
        </label>
      </div>
    </FieldGroup>
  );
}

export default Fields;
