import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { selectUser } from "../../userSlice";
import Navigation from "../Navigation";
import LoginPrompt from "./LoginPropmt";

const LoginPage = ({ auth, firebase }) => {
  const storeUser = useSelector(selectUser);
  if (storeUser) {
    return <Redirect to="/room/general"></Redirect>;
  }
  return (
    <>
      <Navigation firebase={firebase}></Navigation>
      <LoginPrompt auth={auth}></LoginPrompt>
    </>
  );
};
export default LoginPage;
