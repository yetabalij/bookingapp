import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Buttons = styled.button`
  ${tw`

`}
`;

const Button = (props) => {
  return (
    <Buttons className={props.className} onClick={props.onClick}>
      {props.children}
    </Buttons>
  );
};

export default Button;
