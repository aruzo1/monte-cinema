import Form from "../shared/Form";
import ButtonGroup from "../shared/ButtonGroup";
import Button from "../shared/Button";
import Fields from "./Fields";

function SecondForm() {
  return (
    <Form title={{ text: "Great!", highlight: "Now your name" }}>
      <Fields />
      <ButtonGroup>
        <Button type="button" text>
          Log in instead
        </Button>
        <Button primary>Register</Button>
      </ButtonGroup>
    </Form>
  );
}

export default SecondForm;
