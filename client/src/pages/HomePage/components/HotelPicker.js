import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";

const HotelPickerContainer = styled.div`
  ${tw`
    flex
    w-3/5
    ml-auto
    mr-auto
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
        flex
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
    w-96
    `}
  outline: none;
  padding: 15px;
`;
const HotelPicker = () => {
  return (
    <div>
      <HotelPickerContainer>
        <InputContainer>
          <LocationInputContainer>
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
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </LocationInput>
          </LocationInputContainer>
        </InputContainer>
      </HotelPickerContainer>
    </div>
  );
};

export default HotelPicker;
