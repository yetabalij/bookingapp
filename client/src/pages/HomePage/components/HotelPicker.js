import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const HotelPickerContainer = styled.div`
  ${tw`
    flex
    w-3/5
    ml-auto
    mr-auto
    mt--6
    p-4
    justify-items-center
    bg-white
    `}
  border-style: solid;
  border-width: 2px;
  border-color: #febb02;
`;
const InputContainer = styled.div`
  ${tw`

    `}
`;
const HotelPicker = () => {
  return (
    <div>
      <HotelPickerContainer>
        <InputContainer>HotelPicker</InputContainer>
      </HotelPickerContainer>
    </div>
  );
};

export default HotelPicker;
