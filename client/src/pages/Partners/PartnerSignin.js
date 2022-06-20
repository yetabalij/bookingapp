import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { partnersLogin } from "./../../redux/features/Partners/partnersAuthSlice";
import NavBar from "./../../components/SecondaryNavBar";

const Container = styled.div`
  ${tw`
    relative
    `}
`;
const FormContainer = styled.div`
  ${tw`
    absolute 
    `}
  top:18vh;
  left: 50%;
  transform: translate(-50%, 0);
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formValue = {
    email: email,
    password: password,
  };
  const navigate = useNavigate();
  const dispach = useDispatch();
  //console.log(formValue);
  const handleLogin = (e) => {
    e.preventDefault();
    dispach(partnersLogin({ formValue, navigate }));
  };

  return (
    <div>
      <Container>
        <NavBar />
        <FormContainer>
          <form onSubmit={(e) => handleLogin(e)}>
            <p className="text-2xl font-bold mb-5">
              Sign in to manage your property
            </p>
            <label>Email address</label>
            <br />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <br />
            <label>Password</label>
            <br />
            <Input
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
      </Container>
    </div>
  );
};

export default PartnerSignin;
