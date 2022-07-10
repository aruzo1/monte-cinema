import Form from "../shared/Form";
import ButtonGroup from "../shared/ButtonGroup";
import Button from "../shared/Button";
import Fields from "./Fields";

function FirstForm() {
  return (
    <Form title={{ text: "Ahoy you!", highlight: "Care to register?" }}>
      <Fields />
      <ButtonGroup>
        <Button type="button" text>
          Log in instead
        </Button>
        <Button primary>Next step</Button>
      </ButtonGroup>
    </Form>
  );
}

export default FirstForm;
