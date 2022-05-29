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

const PasswordComp = ({ password, setPassword }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800">Create a Password</h1>
      <p className="text-sm text-gray-500 mt-2 mb-8">
        Your password must has to be a minimum of 8 characters.
      </p>
      <FormContainer>
        <label>Password</label>
        <br />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        ></Input>
        <br />
      </FormContainer>
    </div>
  );
};

export default PasswordComp;
