import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setPartnerLogout } from "./../../../redux/features/Partners/partnersAuthSlice";
import { clearPartnerProperty } from "./../../../redux/features/Properties/propertySlice";
import { partnerProperty } from "./../../../redux/features/Properties/propertySlice";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  ${tw`
    bg-primary-color
  `}
`;
const NavBar2 = styled.div`
  ${tw`
    flex
    content-between
    items-center
    justify-between
    text-white
    p-3
    w-5/6
    md:w-4/5
    2xl:w-3/5
    mx-auto
  `}
`;
const NavItemContainer = styled.div`
  ${tw`
    pr-2
  `}
`;
const Button = styled.button`
  ${tw`
    py-2
    px-6
    text-white
    bg-secondary-color
    font-bold
  `}
`;

const NavBar = () => {
  const partner = JSON.parse(localStorage.getItem("partnerProfile"));
  const PartnerProperty = JSON.parse(localStorage.getItem("partnerProperty"));
  const { username, _id } = partner;
  //console.log(partnerProperty);
  const formValue = {
    partnerId: _id,
  };

  const dispach = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispach(partnerProperty(formValue));
  }, []);

  const logoutHandler = () => {
    dispach(setPartnerLogout());
    dispach(clearPartnerProperty());
    navigate("/partnersignin");
  };

  return (
    <Container>
      <NavBar2>
        <h3 className="text-2xl font-bold cursor-pointer">
          <Link to="/partnersdashboard">Real Time</Link>
        </h3>
        <NavItemContainer>
          <Link className="mr-3" to="/reservation">
            Reservation
          </Link>
          <Link className="mr-3" to="/propertydashboard">
            Property
          </Link>
          <Link className="mr-3" to="/room">
            Room
          </Link>
          <Link className="mr-3" to="/finance">
            Finance
          </Link>
        </NavItemContainer>
        <h3 className="text-lg font-medium">{username}</h3>
        {PartnerProperty !== null && (
          <img
            className="w-12 h-12 rounded-full"
            src={PartnerProperty[0].image}
            alt="profile"
          />
        )}
        <Button onClick={logoutHandler}>Sign Out</Button>
      </NavBar2>
    </Container>
  );
};

export default NavBar;
