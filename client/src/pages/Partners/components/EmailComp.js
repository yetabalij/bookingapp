import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

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

const EmailComp = ({ email, setEmail, clientError, setClientError }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800">
        Create your partner account
      </h1>
      <p className="text-sm text-gray-500 mt-2 mb-8">
        Create an account to list and manage your property.
      </p>
      <FormContainer>
        {clientError && (
          <div className="bg-red-300 py-2 px-3 mb-3">
            <p>{clientError}</p>
          </div>
        )}
        <label>Email address</label>
        <br />
        <Input
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setClientError(false);
          }}
          placeholder="email"
        ></Input>
        <br />
      </FormContainer>
    </div>
  );
};

export default EmailComp;
