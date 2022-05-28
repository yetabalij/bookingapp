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

const EmailComp = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800">
        Create your partner account
      </h1>
      <p className="text-sm text-gray-500 mt-2 mb-8">
        Create an account to list and manage your property.
      </p>
      <FormContainer>
        <label>Email address</label>
        <br />
        <Input type="email" placeholder="email"></Input>
        <br />
      </FormContainer>
    </div>
  );
};

export default EmailComp;
