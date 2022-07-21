import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { partnersLogin } from "./../../redux/features/Partners/partnersAuthSlice";
import NavBar from "./../../components/SecondaryNavBar";
import Footer from "../../components/Footer";

import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

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

            {loading && (
              <div className="text-center">
                <div role="status">
                  <svg
                    className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}

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
