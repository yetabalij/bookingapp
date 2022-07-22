import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import ThirdNavBar from "../../components/ThirdNavBar";
import Footer from "../../components/Footer";
import Container from "./../../components/Container";
import Card from "./../../components/Card";
import Button from "./../../components/Button";
import Spinner from "./../../components/Spinner";

import { gustRegister } from "../../redux/features/Gust/gustAuthSlice";

import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import isStrongPassword from "validator/lib/isStrongPassword";

const Input = styled.input`
  ${tw`
  w-full
  p-1
  my-2
  `}
  border: 1px solid gray;
`;

const Register = () => {
  const { loading, error } = useSelector((state) => ({ ...state.gust }));
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clientError, setError] = useState(false);
  const navigate = useNavigate();
  const dispach = useDispatch();
  const formValue = {
    username,
    email,
    password,
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (isEmpty(username) || isEmpty(email) || isEmpty(password)) {
      return setError("All fields are required.");
    } else if (!isEmail(email)) {
      return setError("Valid email is required.");
    } else if (!isStrongPassword(password)) {
      setError(
        "Password must contains at least 8 characters with a minimum of 1 number, 1 uppercase, 1 lowercase and 1 special character. "
      );
    } else {
      dispach(gustRegister({ formValue, navigate }));
    }
  };

  return (
    <div>
      <ThirdNavBar />
      <Container>
        <Card>
          <div className="flex justify-center">
            <h3 className="font-bold text-xl">Register</h3>
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
              <label>User Name</label>
              <Input
                name="username"
                placeholder="user Name"
                type="text"
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                  setError(false);
                }}
              />
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
                <Button type="submit" className="w-full">
                  Register
                </Button>
              </div>
            </form>
          </div>
          <div className="flex justify-center">
            <Link to="/signin">
              <p className="text-secondary-color">You have account? LogIn</p>
            </Link>
          </div>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default Register;
