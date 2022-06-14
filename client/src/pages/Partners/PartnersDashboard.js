import React, { useState, useEffect } from "react";

import axios from "axios";
import styled from "styled-components";
import tw from "twin.macro";

import { useDispatch, useSelector } from "react-redux";
import { setPartnerLogout } from "../../redux/features/Partners/partnersAuthSlice";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

const Container = styled.div`
  ${tw`
    
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

  return (
    <Container>
      <NavBar />
    </Container>
  );
};

export default PartnersDashboard;
