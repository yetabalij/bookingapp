import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

import NavBar from "./components/NavBar";

const Container = styled.div`
  ${tw`
    
  `}
`;
const ContentContainer = styled.div`
  ${tw`
     w-5/6
    md:w-4/5
    2xl:w-3/5
    mx-auto
    mt-40
    justify-items-center
  `}
`;
const Card = styled.div`
  ${tw`
        bg-white
        p-8
        mt-4
        flex
        flex-col
      justify-between
      justify-items-center
`}
  box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 2px 1px, rgba(0, 0, 0, 0.3) 0px 1px 1px -1px;
`;
const Button = styled.button`
  ${tw`
    bg-secondary-color
    text-white
    py-3
    px-4
    text-sm
    font-bold
    mt-6
    `}
`;

const PartnersDashboard = () => {
  const partnerProperty = JSON.parse(localStorage.getItem("partnerProperty"));
  console.log(partnerProperty);
  return (
    <Container>
      <NavBar />
      <ContentContainer>
        <Card>
          <p className="text-2xl font-medium">Property Detail</p>
          <div className="flex mt-7">
            {partnerProperty !== null && (
              <img
                className="w-2/5 rounded"
                src={partnerProperty[0].image}
                alt=""
              />
            )}
            {partnerProperty !== null && (
              <div className="ml-10">
                <h3>{partnerProperty[0].name}</h3>
                <h3>{partnerProperty[0].title}</h3>
                <h3>{partnerProperty[0].address}</h3>
                <h3>{partnerProperty[0].city}</h3>
                <h3>{partnerProperty[0].distances}</h3>
                <h3>{partnerProperty[0].type}</h3>
                <h3>{partnerProperty[0].desc}</h3>
              </div>
            )}
          </div>
          <Button>Edit Property</Button>
        </Card>
      </ContentContainer>
    </Container>
  );
};

export default PartnersDashboard;
