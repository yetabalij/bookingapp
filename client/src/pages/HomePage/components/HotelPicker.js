import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { searchHotels } from "./../../../redux/features/searchSlice";

const HotelPickerContainer = styled.div`
  ${tw`
    overflow-hidden
    flex
    md:w-4/5
    2xl:w-3/5
    mx-auto
    mt--6
    justify-items-center
    bg-white
    `}
  border-style: solid;
  border-width: 2px;
  border-color: #febb02;
`;
const InputContainer = styled.div`
  ${tw`
        grid
        xl:flex
    `}
`;
const CheckInContainer = styled.div`
  ${tw`

    `}
  border-style: solid;
  border-width: 2px;
  border-color: #febb02;
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
    //e.preventDefaulet();
    dispach(searchHotels({ formValue, navigate }));
    navigate("/searchhotels");
  };

  return (
    <div>
      <HotelPickerContainer>
        <InputContainer>
          {/* <form onSubmit={onFormSubmitHandler}> */}
          <input
            placeholder="max People"
            type="text"
            name="maxPeople"
            value={maxPeople}
            onChange={(e) => setmaxPeople(e.target.value)}
          />
          <input
            placeholder="city"
            type="text"
            name="city"
            value={city}
            onChange={(e) => setcity(e.target.value)}
          />
          <CheckInContainer>
            <button
              onClick={onFormSubmitHandler}
              //type="submit"
              //style={{ paddingLeft: "109px" }}
            >
              Search
            </button>
          </CheckInContainer>
          {/* </form> */}
        </InputContainer>
      </HotelPickerContainer>
    </div>
  );
};

export default HotelPicker;
