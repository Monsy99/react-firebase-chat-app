import Navigation from "../Navigation";
import LoginPrompt from "./LoginPropmt";

const LoginPage = ({ auth, firebase }) => {
  return (
    <>
      <Navigation firebase={firebase}></Navigation>
      <LoginPrompt auth={auth}></LoginPrompt>
    </>
  );
};
export default LoginPage;
