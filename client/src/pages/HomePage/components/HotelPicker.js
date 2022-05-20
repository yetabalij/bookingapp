import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faBed } from "@fortawesome/free-solid-svg-icons";
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
const LocationInputContainer = styled.div`
  ${tw`
    
    `}
  border-style: solid;
  border-width: 2px;
  border-color: #febb02;
`;
const LocationInput = styled.select`
  ${tw`
     md:w-96
    `}
  outline: none;
  padding: 15px;
`;
const CheckInContainer = styled.div`
  ${tw`

    `}
  border-style: solid;
  border-width: 2px;
  border-color: #febb02;
`;
const DatePicker = styled.input`
  ${tw`
    
    `}
  outline: none;
  padding: 15px;
`;

const HotelPicker = () => {
  const [city, setCity] = useState("");
  const formValue = {
    city: city,
  };

  const dispach = useDispatch();
  const navigate = useNavigate();

  const onFormSubmitHandler = (e) => {
    //e.preventDefaulet();
    dispach(searchHotels({ formValue, navigate }));
  };

  return (
    <div>
      <HotelPickerContainer>
        <InputContainer>
          {/* <form onSubmit={onFormSubmitHandler}> */}
          <input
            placeholder="example"
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {/* <LocationInputContainer>
              <FontAwesomeIcon
                icon={faBed}
                style={{ color: "gray", marginLeft: "20px" }}
              />
              <LocationInput>
                <option
                  style={{ color: "gray" }}
                  value=""
                  selected
                  disabled
                  hidden
                >
                  Where are you going?
                </option>
                <option value="Addis Ababa">Addis Ababa</option>
                <option value="Asmara">Asmara</option>
                <option value="Mombassa">Mombassa</option>
              </LocationInput>
            </LocationInputContainer>
            <CheckInContainer>
              <DatePicker type="date"></DatePicker>
            </CheckInContainer>
            <CheckInContainer>
              <DatePicker type="date"></DatePicker>
            </CheckInContainer>
            <CheckInContainer>
              <DatePicker type="input" placeholder="some value"></DatePicker>
            </CheckInContainer> */}
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
