import Menu from "../Menu";
import ChatRoom from "../ChatRoom";

import { useAuthState } from "react-firebase-hooks/auth";
import { GridContainer } from "./styled";

const Default = ({ firebase }) => {
  const firestore = firebase.firestore();
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  return (
    <>
      <GridContainer>
        <Menu db={firebase} firestore={firestore} auth={auth}></Menu>
        {user ? (
          <ChatRoom firebase={firebase} firestore={firestore} auth={auth} />
        ) : (
          ""
        )}
      </GridContainer>
    </>
  );
};
export default Default;
