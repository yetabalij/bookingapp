import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FormContainer = styled.div`
  ${tw`
  
  `}
`;
const Input = styled.input`
  ${tw`
  w-full
  p-1
  mb-3
  `}
  border: 1px solid gray;
`;

const ContactComp = ({ firstName, lastName, setFirstName, setLastName }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800">Contact details</h1>
      <p className="text-sm text-gray-500 mt-2 mb-8">
        Create an account to list and manage your property.
      </p>
      <FormContainer>
        <label>First Name</label>
        <br />
        <Input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        ></Input>
        <br />
        <label>Last Name</label>
        <br />
        <Input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        ></Input>
      </FormContainer>
    </div>
  );
};

export default ContactComp;
