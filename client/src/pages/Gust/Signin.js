import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import NavBar from "../../components/ThirdNavBar";
import Container from "./../../components/Container";
import Card from "./../../components/Card";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

const Input = styled.input`
  ${tw`
  w-full
  p-1
  my-2
  `}
  border: 1px solid gray;
`;

const Signin = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert("ok");
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
            <form onSubmit={onSubmitHandler} className="w-3/6">
              <label>Email</label>
              <Input placeholder="Email" type="email" />
              <label>Password</label>
              <Input placeholder="Password" type="password" />
              <div className="w-full bg-secondary-color text-white py-3 flex justify-center cursor-pointer">
                <Button type={"submit"} className={"w-full"}>
                  Register
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
