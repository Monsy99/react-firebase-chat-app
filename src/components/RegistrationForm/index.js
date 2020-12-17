import React from "react";
import Wrapper from "../../assets/Wrapper";
import SignIn from "../SignIn";

export default RegistrationForm = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Header>Hi ! Looks like you are not signed in</Header>
          <SignIn></SignIn>
          <Paragraph>Register here (not working yet)</Paragraph>
        </Container>
      </Wrapper>
    </>
  );
};
