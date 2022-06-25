import React, { useState } from "react";
import NavBar from "./../../components/SecondaryNavBar";
import styled from "styled-components";
import tw from "twin.macro";
import EmailComp from "./components/EmailComp";
import ContactComp from "./components/ContactComp";
import PasswordComp from "./components/PasswordComp";
import SignInComp from "./components/SignInComp";
import Footer from "../../components/Footer";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { partnersRegister } from "../../redux/features/Partners/partnersAuthSlice";

const Container = styled.div`
  ${tw`
    `}
`;
const FormContainer = styled.div`
  ${tw`
  w-[400px]
  mr-auto
  ml-auto
  mt-8 
    `}
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

  const navigate = useNavigate();
  const dispach = useDispatch();

  const formValue = {
    email: email,
    username: username,
    password: password,
  };

  const incrementCount = () => {
    setCompState(CompState + 1);
  };

  const submitHandler = () => {
    dispach(partnersRegister({ formValue, navigate }));
    //console.log(formValue);
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
      <Footer />
    </div>
  );
};

export default PartnersRegister;
