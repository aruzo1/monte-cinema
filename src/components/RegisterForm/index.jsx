import Form from "../ui/Form";
import ButtonGroup from "../ui/ButtonGroup";
import Button from "../ui/Button";
import Fields from "./Fields";

function RegisterForm() {
  return (
    <Form title={{ text: "Ahoy you!", highlight: "Care to register?" }}>
      <Fields />
      <ButtonGroup>
        <Button text>Log in instead</Button>
        <Button primary>Next step</Button>
      </ButtonGroup>
    </Form>
  );
}

export default RegisterForm;
