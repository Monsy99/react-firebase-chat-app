import SignIn from "../../SignIn";
import TestAccountSignIn from "../TestAccountSignIn";

const LoginPrompt = ({ auth }) => {
  return (
    <div>
      <header>Hi ! Looks like you are not logged in</header>
      <SignIn auth={auth}></SignIn>
      <TestAccountSignIn></TestAccountSignIn>
    </div>
  );
};
export default LoginPrompt;
