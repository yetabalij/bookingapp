import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { createHotel } from "../../redux/features/Properties/propertySlice";

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
  const { loading } = useSelector((state) => ({ ...state.properties }));
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
      {loading !== "" && loading === true ? (
        <div className="text-center">
          <div role="status">
            <svg
              className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        ""
      )}
      <form onSubmit={(e) => handleSubmit(e)}>
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
