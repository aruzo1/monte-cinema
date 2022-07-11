import useRegisterForm from "../../../hooks/useRegisterForm";
import Title from "../shared/Title";
import Button from "../shared/Button";
import style from "./style.module.css";

function SuccessMessage() {
  const { values } = useRegisterForm();

  return (
    <div className={style.wrapper}>
      <Title text={`Good job ${values.firstName}!`} />
      <div>
        <p className={style.msg}>
          We have sent you an email to <span>{values.email}</span>.
        </p>
        <p>
          Make sure to click the link from the message to activate your account.
        </p>
      </div>
      <Button primary>Go To Homepage</Button>
    </div>
  );
}

export default SuccessMessage;
