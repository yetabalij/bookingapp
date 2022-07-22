import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { searchHotels } from "./../../../redux/features/searchSlice";

const HotelPickerContainer = styled.div`
  ${tw`
    flex
    md:w-4/5
    2xl:w-3/5
    mx-auto
    mt-6
    justify-items-center
    `}
`;
const InputContainer = styled.div`
  ${tw`
        flex
        w-full
        sm:flex-row
        flex-col
        items-center
    `}
`;
const CheckInContainer = styled.div`
  ${tw`
    bg-primary-color
    text-white
    py-2
    px-8
    `}
`;
const Input = styled.input`
  ${tw`
    mr-4
  `}
  border: none;
  background: #f2f2f2;
  padding: 12px;
  border-radius: 3px;
  width: 250px;
  font-size: 14px;
`;

const HotelPicker = () => {
  const [maxPeople, setmaxPeople] = useState("");
  const [city, setcity] = useState("");

  const formValue = {
    maxNumber: maxPeople,
    city: city,
  };

  const dispach = useDispatch();
  const navigate = useNavigate();

  const onFormSubmitHandler = (e) => {
    dispach(searchHotels({ formValue, navigate }));
    navigate("/searchhotels", { state: formValue });
  };

  return (
    <HotelPickerContainer>
      <InputContainer>
        <div className="mb-2">
          <Input
            className=""
            placeholder="max People"
            type="text"
            name="maxPeople"
            value={maxPeople}
            onChange={(e) => setmaxPeople(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <Input
            className=""
            placeholder="city"
            type="text"
            name="city"
            value={city}
            onChange={(e) => setcity(e.target.value)}
          />
        </div>
        <CheckInContainer>
          <button className="" onClick={onFormSubmitHandler}>
            Search
          </button>
        </CheckInContainer>
      </InputContainer>
    </HotelPickerContainer>
  );
};

export default HotelPicker;
