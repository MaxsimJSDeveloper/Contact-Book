import { Helmet } from "react-helmet";
import LoginForm from "../../components/LoginForm/LoginForm";
import Creators from "../../components/Creators/Creators";

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
      <Creators />
    </div>
  );
}
