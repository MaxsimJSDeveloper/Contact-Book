import { Helmet } from "react-helmet";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Creators from "../../components/Creators/Creators";

export default function RegistrationPage() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
      <Creators />
    </div>
  );
}
