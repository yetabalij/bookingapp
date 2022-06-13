import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import tw from "twin.macro";

// import Property from "../Properties/Property";
// import Rooms from "../Properties/Rooms";

import { useDispatch, useSelector } from "react-redux";
import { setPartnerLogout } from "../../redux/features/Partners/partnersAuthSlice";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  ${tw`
    
    
  `}
`;
// const LeftContainer = styled.div`
//   ${tw`
//   bg-gray-100
//   `}
// `;
// const RightContainer = styled.div`
//   ${tw`

//   `}
// `;
const Button = styled.button`
  ${tw`
    py-2
    px-6
    text-white
    bg-secondary-color
    font-bold
  `}
`;

const PartnersDashboard = () => {
  const partner = JSON.parse(localStorage.getItem("partnerProfile"));
  const { username, _id } = partner;

  const formValue = {
    partnerId: _id,
  };

  const dispach = useDispatch();
  const navigate = useNavigate();

  const [partnerProperty, setPartnerProperty] = useState(null);
  useEffect(() => {
    axios
      .post("http://localhost:8000/api/hotels/propertybypartner", formValue)
      .then((res) => {
        setPartnerProperty(res.data);
      });
  }, []);

  const logoutHandler = () => {
    dispach(setPartnerLogout());
    navigate("/partnersignin");
  };

  return (
    <Container>
      <h1>dash board</h1>
      <h3>wellcome {username}</h3>
      {partnerProperty !== null && <h3>Property, {partnerProperty[0].name}</h3>}
      <Button onClick={logoutHandler}>Sign Out</Button>
    </Container>
  );
};

export default PartnersDashboard;
