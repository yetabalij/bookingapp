import React, { useState } from "react";
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
  const [name, setName] = useState("");
  //const [propertyType, setPropertyType] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAddress] = useState("");
  const [distance, setDistance] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  //const [firstName, setFirstName] = useState("");
  const formValue = {
    name: name,
    type: "hotel",
    city: city,
    address: adress,
    distances: distance,
    //photos:
    title: title,
    desc: description,
    cheapestPrice: Number(price),
  };

  const handleSubmit = () => {
    console.log(formValue);
  };
  return (
    <Container>
      <h1 className="text-2xl font-bold text-slate-800">
        Want to Create New Property
      </h1>
      <br />
      <label>Name</label>
      <br />
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      ></Input>
      <br />
      <label>Property type</label>
      <br />
      <Select
      //type="text"
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
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
      ></Input>
      <br />
      <label>Adress</label>
      <br />
      <Input
        type="text"
        value={adress}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Adress"
      ></Input>
      <label>Distance</label>
      <br />
      <Input
        type="text"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        placeholder="Distance"
      ></Input>
      <label>Title</label>
      <br />
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      ></Input>
      <label>Description</label>
      <br />
      <Input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      ></Input>
      <label>Price</label>
      <br />
      <Input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      ></Input>
      <label>Photo</label>
      <br />
      <Input
        type="file"
        //value={email}
        //onChange={(e) => setEmail(e.target.value)}
        //placeholder="Photo"
      ></Input>
      <br />
      <Button onClick={handleSubmit}>Creat Property</Button>
    </Container>
  );
};

export default Property;
