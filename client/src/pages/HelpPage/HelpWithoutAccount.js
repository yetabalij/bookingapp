import React from "react";
import NavBar from "./../../components/SecondaryNavBar";
import Footer from "../../components/Footer";
import Card from "./../../components/Card";

import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
   w-2/5
   mx-auto
   mt-10
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
    bg-secondary-color
    text-white
    py-3
    px-4
    text-sm
    font-bold
    mt-6
    `}
`;

const HelpWithoutAccount = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    alert("information submited.");
  };
  return (
    <div>
      <NavBar />
      <Container>
        <Card>
          <p>
            provide us your contact details and we will reach you immediately
          </p>
          <form onSubmit={handelSubmit} className="mt-5">
            <label>Full Name</label>
            <br />
            <Input className="" type="text" />
            <label>Email</label>
            <br />
            <Input className="" type="email" />
            <label>Phone</label>
            <br />
            <Input className="" type="text" />
            <Button type="submit">Contact Us</Button>
          </form>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default HelpWithoutAccount;
