import React from "react";
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
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert("ok");
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
            <form onSubmit={onSubmitHandler}>
              <label>User Name</label>
              <Input />
              <label>Email</label>
              <Input />
              <label>Password</label>
              <Input />
              <div className="w-full bg-secondary-color text-white py-3 flex justify-center cursor-pointer">
                <Button type={"submit"}>Register</Button>
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
