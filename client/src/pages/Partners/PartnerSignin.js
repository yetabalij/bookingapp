import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { partnersLogin } from "./../../redux/features/Partners/partnersAuthSlice";
import NavBar from "./../../components/SecondaryNavBar";
import Spinner from "../../components/Spinner";
import Footer from "../../components/Footer";

import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

const Container = styled.div`
  ${tw`
    
    `}
`;
const FormContainer = styled.div`
  ${tw`
    w-[300px]
    sm:w-[400px]
    mr-auto
    ml-auto
    mt-8
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
const Button = styled.button`
  ${tw`
    w-full
    bg-secondary-color
    text-white
    py-3
  `}
`;
const ButtonSignin = styled.button`
  ${tw`
    w-full
    bg-white
    text-secondary-color
    py-3
  `}
  border: 1px solid #0071c2;
`;
const HorizontalLine = styled.hr`
  ${tw`
    my-10
    font-bold
`}
  width: 100%;
  border: 1px solid #f3f3f3;
`;
const PartnerSignin = () => {
  const { loading, error } = useSelector((state) => ({
    ...state.partnersAuth,
  }));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clientError, setClientError] = useState(false);

  const formValue = {
    email: email,
    password: password,
  };
  const navigate = useNavigate();
  const dispach = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (isEmpty(email) || isEmpty(password)) {
      return setClientError("All fields are required.");
    } else if (!isEmail(email)) {
      return setClientError("Valid email is required.");
    } else if (error) {
      return setClientError(error);
    } else {
      dispach(partnersLogin({ formValue, navigate }));
    }
  };

  return (
    <div>
      <Container>
        <NavBar />
        <FormContainer>
          <form onSubmit={(e) => handleLogin(e)} noValidate>
            {clientError && (
              <div className="bg-red-300 py-2 px-3 mb-3">
                <p>{clientError}</p>
              </div>
            )}

            <Spinner loading={loading} />

            <p className="text-2xl font-bold mb-5">
              Sign in to manage your property
            </p>
            <label>Email address</label>
            <br />
            <Input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <br />
            <label>Password</label>
            <br />
            <Input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              autoComplete="true"
            />
            <Button>Login</Button>
            <br />
            <HorizontalLine />
            <ButtonSignin
              type="submit"
              onClick={() => navigate("/partneregister")}
            >
              Create your partner account
            </ButtonSignin>
          </form>
        </FormContainer>
        <Footer />
      </Container>
    </div>
  );
};

export default PartnerSignin;
