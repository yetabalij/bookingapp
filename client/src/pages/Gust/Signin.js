import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import NavBar from "../../components/ThirdNavBar";
import Container from "./../../components/Container";
import Card from "./../../components/Card";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Spinner from "./../../components/Spinner";

import { gustSignIn } from "./../../redux/features/Gust/gustAuthSlice";

import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

const Input = styled.input`
  ${tw`
  w-full
  p-1
  my-2
  `}
  border: 1px solid gray;
`;

const Signin = () => {
  const { loading, error } = useSelector((state) => ({ ...state.gust }));
  const dispach = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clientError, setError] = useState(false);
  const formValue = {
    email,
    password,
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (isEmpty(email) || isEmpty(password)) {
      return setError("All fields are required.");
    } else if (!isEmail(email)) {
      return setError("Valid email is required.");
    }
    dispach(gustSignIn({ formValue, navigate }));
  };

  return (
    <div>
      <NavBar />
      <Container>
        <Card>
          <div className="flex justify-center">
            <h3 className="font-bold text-xl">SignIn</h3>
          </div>
          <div className="flex justify-center mt-3 pb-4">
            <form onSubmit={onSubmitHandler} className="w-3/6" noValidate>
              {clientError && (
                <div className="bg-red-300 py-2 px-3 mb-3">
                  <p>{clientError}</p>
                </div>
              )}
              {error && (
                <div className="bg-red-300 py-2 px-3 mb-3">
                  <p>{error}</p>
                </div>
              )}
              {loading && <Spinner loading={loading} />}
              <label>Email</label>
              <Input
                name="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false);
                }}
              />
              <label>Password</label>
              <Input
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
              />
              <div className="w-full bg-secondary-color text-white py-3 flex justify-center cursor-pointer">
                <Button type={"submit"} className={"w-full"}>
                  SignIn
                </Button>
              </div>
            </form>
          </div>
          <div className="flex justify-center">
            <Link to="/register">
              <p className="text-secondary-color">
                You don't have account? Register
              </p>
            </Link>
          </div>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default Signin;
