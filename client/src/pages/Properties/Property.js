import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    absolute  
  `}
  top:4vh;
  left: 55%;
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
const Select = styled.select`
  ${tw`
  w-full
  p-1
  mb-3
  `}
  border: 1px solid gray;
`;
const Button = styled.button`
  ${tw`
    mt-5
    w-full
    text-white
    bg-secondary-color
    py-2
    `}
`;

const Property = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold text-slate-800">
        Want to Create New Property
      </h1>
      <label>First Name</label>
      <br />
      <Input
        type="text"
        //value={email}
        //onChange={(e) => setEmail(e.target.value)}
        placeholder="First Name"
      ></Input>
      <br />
      <label>Last Name</label>
      <br />
      <Input
        type="text"
        //value={email}
        //onChange={(e) => setEmail(e.target.value)}
        placeholder="Last Name"
      ></Input>
      <br />
      <label>Property type</label>
      <br />
      <Select
      //type="email"
      //value={email}
      //onChange={(e) => setEmail(e.target.value)}
      //placeholder="email"
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </Select>
      <br />
      <label>City</label>
      <br />
      <Input
        type="text"
        //value={email}
        //onChange={(e) => setEmail(e.target.value)}
        placeholder="City"
      ></Input>
      <br />
      <label>Adress</label>
      <br />
      <Input
        type="text"
        //value={email}
        //onChange={(e) => setEmail(e.target.value)}
        placeholder="Adress"
      ></Input>
      <label>Distance</label>
      <br />
      <Input
        type="text"
        //value={email}
        //onChange={(e) => setEmail(e.target.value)}
        placeholder="Distance"
      ></Input>
      <label>Title</label>
      <br />
      <Input
        type="text"
        //value={email}
        //onChange={(e) => setEmail(e.target.value)}
        placeholder="Title"
      ></Input>
      <label>Description</label>
      <br />
      <Input
        type="text"
        //value={email}
        //onChange={(e) => setEmail(e.target.value)}
        placeholder="Description"
      ></Input>
      <label>Price</label>
      <br />
      <Input
        type="text"
        //value={email}
        //onChange={(e) => setEmail(e.target.value)}
        placeholder="Price"
      ></Input>
      <label>Last Name</label>
      <br />
      <Input
        type="file"
        //value={email}
        //onChange={(e) => setEmail(e.target.value)}
        //placeholder="Photo"
      ></Input>
      <br />
      <Button>Creat Property</Button>
    </Container>
  );
};

export default Property;
