import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { createHotel } from "../../redux/features/Properties/propertySlice";

import Spinner from "./../../components/Spinner";

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
  const Partners = JSON.parse(localStorage.getItem("partnerProfile"));
  const { loading, error } = useSelector((state) => ({ ...state.properties }));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAddress] = useState("");
  const [distance, setDistance] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState();
  const formValue = {
    partner: Partners._id,
    name: name,
    type: propertyType,
    city: city,
    address: adress,
    distances: distance,
    image: image,
  };

  function previewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  }
  const fileHandleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    previewFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createHotel({ formValue, navigate }));
    setName("");
    setPropertyType("");
    setCity("");
    setAddress("");
    setDistance("");
    setImage("");
  };
  return (
    <Container>
      {loading !== "" && loading === true ? <Spinner loading={loading} /> : ""}
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className="text-2xl font-bold text-slate-800">
          Want to Create New Property
        </h1>
        {error && (
          <div className="bg-red-300 py-2 px-3 mt-3">
            <p>{error}</p>
          </div>
        )}
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
        <Input
          type="text"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          placeholder="Property Type"
        ></Input>
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
        <label>Photo</label>
        <br />
        <Input
          type="file"
          onChange={fileHandleChange}
          id="fileInput"
          accept="image/png, image/jpeg, image/jpg, image/jfif"
        ></Input>
        <img src={image} alt="" />
        <br />
        <Button type="submit">Creat Property</Button>
      </form>
    </Container>
  );
};

export default Property;
