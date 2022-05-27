import React, { useState } from "react";
import NavBar from "./../../components/NavBar";
import styled from "styled-components";
import tw from "twin.macro";
import EmailComp from "./components/EmailComp";
import ContactComp from "./components/ContactComp";
import PasswordComp from "./components/PasswordComp";

const Container = styled.div`
  ${tw`
    relative
    `}
`;
const FormContainer = styled.div`
  ${tw`
    absolute 
    `}
  top:8vh;
  left: 50%;
  transform: translate(-50%, 0);
`;

const PartnersRegister = () => {
  const [CompState, setCompState] = useState(2);
  const Components = ["email", "contact", "password"];

  const FormRenderer = () => {
    if (CompState === 0) {
      return <EmailComp />;
    } else if (CompState === 1) {
      return <ContactComp />;
    } else {
      return <PasswordComp />;
    }
  };

  return (
    <div>
      <NavBar />
      <Container>
        <FormContainer>
          <form onSubmit={() => alert("hello")}>
            {FormRenderer()}
            <button>Continue</button>
          </form>
        </FormContainer>
      </Container>
    </div>
  );
};

export default PartnersRegister;
