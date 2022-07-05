import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import ThirdNavBar from "../../components/ThirdNavBar";
import Footer from "../../components/Footer";
import Container from "./../../components/Container";
import Card from "./../../components/Card";
import Button from "./../../components/Button";

const Input = styled.input`
  ${tw`
  w-full
  p-1
  my-2
  `}
  border: 1px solid gray;
`;

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formValue = {
    username,
    email,
    password,
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formValue));
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
            <form onSubmit={onSubmitHandler} className="w-3/6">
              <label>User Name</label>
              <Input
                placeholder="user Name"
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label>Email</label>
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="w-full bg-secondary-color text-white py-3 flex justify-center cursor-pointer">
                <Button type={"submit"} className={"w-full"}>
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
