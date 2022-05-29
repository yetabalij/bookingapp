import React, { useState } from "react";
import NavBar from "./../../components/NavBar";
import styled from "styled-components";
import tw from "twin.macro";
import EmailComp from "./components/EmailComp";
import ContactComp from "./components/ContactComp";
import PasswordComp from "./components/PasswordComp";
import SignInComp from "./components/SignInComp";

const Container = styled.div`
  ${tw`
    relative
    `}
`;
const FormContainer = styled.div`
  ${tw`
    absolute 
    `}
  top:4vh;
  left: 50%;
  transform: translate(-50%, 0);
`;
const Button = styled.button`
  ${tw`
    w-full
    bg-secondary-color
    text-white
    py-3
  `}
`;

const PartnersRegister = () => {
  const [CompState, setCompState] = useState(0);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const username = `${firstName} ${lastName}`;

  const formValue = {
    email: email,
    username: username,
    password: password,
  };

  const incrementCount = () => {
    setCompState(CompState + 1);
  };

  const submitHandler = () => {
    console.log(formValue);
  };

  const FormRenderer = () => {
    if (CompState === 0) {
      return <EmailComp email={email} setEmail={setEmail} />;
    } else if (CompState === 1) {
      return (
        <ContactComp
          firstName={firstName}
          lastName={lastName}
          setFirstName={setFirstName}
          setLastName={setLastName}
        />
      );
    } else {
      return <PasswordComp password={password} setPassword={setPassword} />;
    }
  };

  return (
    <div>
      <NavBar />
      <Container>
        <FormContainer>
          {FormRenderer()}
          <Button onClick={CompState < 2 ? incrementCount : submitHandler}>
            {CompState === 0 ? "Continue" : CompState === 1 ? "Next" : "Create"}
          </Button>
          {CompState === 0 && <SignInComp />}
        </FormContainer>
      </Container>
    </div>
  );
};

export default PartnersRegister;
