import { useDispatch } from "react-redux";
import { setTestUser } from "../../../userSlice";
import Button from "../../Button";
import SignIn from "../../SignIn";
import { Container, Header } from "./styled";

const LoginPrompt = ({ auth }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Header>
        Hi !<br></br> Looks like you are not logged in.
      </Header>
      <SignIn auth={auth}></SignIn>
      <Button
        marginTop
        plain
        onClick={() => {
          dispatch(setTestUser());
        }}
      >
        Sign in with test account
      </Button>
    </Container>
  );
};
export default LoginPrompt;
