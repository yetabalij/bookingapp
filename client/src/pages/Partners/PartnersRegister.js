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
import { useDispatch, useSelector } from "react-redux";
import { partnersRegister } from "../../redux/features/Partners/partnersAuthSlice";

import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import isStrongPassword from "validator/lib/isStrongPassword";

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
  const { error } = useSelector((state) => ({ ...state.partnersAuth }));
  const [CompState, setCompState] = useState(0);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [clientError, setClientError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const username = `${firstName} ${lastName}`;

  const navigate = useNavigate();
  const dispach = useDispatch();

  const formValue = {
    email: email,
    username: username,
    password: password,
  };

  const incrementCount = () => {
    if (CompState === 0) {
      if (isEmpty(email)) {
        return setClientError("All fields are required.");
      } else if (!isEmail(email)) {
        return setClientError("Email must be Valid.");
      }
      setCompState((prevState) => prevState + 1);
    } else if (CompState === 1) {
      if (isEmpty(firstName) || isEmpty(lastName)) {
        return setClientError("All fields are required.");
      }
      setCompState((prevState) => prevState + 1);
    } else if (CompState === 2) {
      setCompState((prevState) => prevState + 1);
    }
  };

  const submitHandler = () => {
    if (isEmpty(password)) {
      return setClientError("All fields are required.");
    } else if (!isStrongPassword(password)) {
      return setClientError(
        "Password must contains at least 8 characters with a minimum of 1 upercase, 1 lowercase 1 number and 1 special character"
      );
    } else if (error) {
      setClientError(error);
    } else {
      dispach(partnersRegister({ formValue, navigate }));
    }
  };

  const FormRenderer = () => {
    if (CompState === 0) {
      return (
        <EmailComp
          email={email}
          setEmail={setEmail}
          clientError={clientError}
          setClientError={setClientError}
        />
      );
    } else if (CompState === 1) {
      return (
        <ContactComp
          firstName={firstName}
          lastName={lastName}
          setFirstName={setFirstName}
          setLastName={setLastName}
          clientError={clientError}
          setClientError={setClientError}
        />
      );
    } else {
      return (
        <PasswordComp
          password={password}
          setPassword={setPassword}
          clientError={clientError}
          setClientError={setClientError}
        />
      );
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
