import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import axios from "axios";

import Australia from "./../../../images/PropertyByCity/australia.jpg";
import Canada from "./../../../images/PropertyByCity/canada.jpg";
import Dubai from "./../../../images/PropertyByCity/dubai.jpg";
import Ethiopia from "./../../../images/PropertyByCity/ethiopia.jpg";
import Kenya from "./../../../images/PropertyByCity/kenya.jpg";

const Container = styled.div`
  ${tw`
    w-5/6
    md:w-4/5
    2xl:w-3/5
    mx-auto
    mt-14
    mb-20
    flex
    flex-col
    `}
`;
const TopContainer = styled.div`
  ${tw`
    sm:grid
    sm:grid-cols-2 
    sm:gap-4
    mb-4
    `}
`;
const BottomContainer = styled.div`
  ${tw`
    sm:grid
    sm:grid-cols-3 
    sm:gap-4
    `}
`;
const CardContainer = styled.div`
  ${tw`
    relative
    cursor-pointer
    select-none
    `}
`;
const Image = styled.img`
  ${tw`

    `}
`;
const TextContainer = styled.div`
  ${tw`
        absolute
        top-5
        left-5
    `}
`;

const CityProperty = () => {
  const [cityProperty, setCityProperty] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/propertybycity")
      .then((res) => setCityProperty(res.data));
  }, []);

  return (
    <Container>
      <TopContainer>
        <CardContainer>
          <Image src={Ethiopia} alt="Addis Ababa" className="mb-4" />
          <TextContainer>
            <h1 className="text-2xl text-white font-bold">Addis Ababa</h1>
            <p className="text-white">{cityProperty.addis} properties</p>
          </TextContainer>
        </CardContainer>
        <CardContainer>
          <Image src={Kenya} alt="Kenya" />
          <TextContainer>
            <h1 className="text-2xl text-white font-bold">Nairobi</h1>
            <p className="text-white">{cityProperty.nairobi} properties</p>
          </TextContainer>
        </CardContainer>
      </TopContainer>
      <BottomContainer>
        <CardContainer>
          <Image src={Australia} alt="Sydney" className="mb-4" />
          <TextContainer>
            <h1 className="text-2xl text-white font-bold">Sydney</h1>
            <p className="text-white">{cityProperty.sydney} properties</p>
          </TextContainer>
        </CardContainer>
        <CardContainer>
          <Image src={Canada} alt="Toronto" className="mb-4" />
          <TextContainer>
            <h1 className="text-2xl text-white font-bold">Toronto</h1>
            <p className="text-white">{cityProperty.toronto} properties</p>
          </TextContainer>
        </CardContainer>
        <CardContainer>
          <Image src={Dubai} alt="Dubai" />
          <TextContainer>
            <h1 className="text-2xl text-white font-bold">Dubai</h1>
            <p className="text-white">{cityProperty.dubai} properties</p>
          </TextContainer>
        </CardContainer>
      </BottomContainer>
    </Container>
  );
};

export default CityProperty;
