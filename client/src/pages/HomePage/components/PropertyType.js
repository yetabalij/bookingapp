import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import tw from "twin.macro";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Appartment from "./../../../images/PropertyTypes/appartment.jpg";
import cacabins from "./../../../images/PropertyTypes/cacabins.jpg";
import cottage from "./../../../images/PropertyTypes/cottage.jpg";
import glamping from "./../../../images/PropertyTypes/glamping.jpg";
import gusthouse from "./../../../images/PropertyTypes/gusthouse.jpg";
import hotel from "./../../../images/PropertyTypes/hotel.jpg";
import resort from "./../../../images/PropertyTypes/resort.jpg";
import villa from "./../../../images/PropertyTypes/villa.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Container = styled.div`
  ${tw`
     w-5/6
    md:w-4/5
    2xl:w-3/5
    mx-auto
    mt-4
    mb-16
  `}
`;
const ImageContainer = styled.div`
  ${tw`
    mr-5
    cursor-pointer
    select-none
  `}
`;
const ContentContainer = styled.div`
  ${tw`
    flex
    flex-col
    pt-3
  `}
`;

const PropertyType = () => {
  const [propertyCount, setPropertyCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8000/api/propertyType").then((res) => {
      setPropertyCount(res.data);
    });
  }, []);

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-3">Browse by property type</h1>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        shouldResetAutoplay={false}
      >
        <ImageContainer>
          <img src={Appartment} onClick={() => navigate("/signin")} alt="" />
          <ContentContainer>
            <p className="font-bold">Appartments</p>
            <h1>{propertyCount.appartment} Appartments</h1>
          </ContentContainer>
        </ImageContainer>
        <ImageContainer>
          <img src={cacabins} alt="" />
          <ContentContainer>
            <p className="font-bold">Resorts</p>
            <h1>{propertyCount.resort} Resorts</h1>
          </ContentContainer>
        </ImageContainer>
        <ImageContainer>
          <img src={cottage} alt="" />
          <ContentContainer>
            <p className="font-bold">Villas</p>
            <h1>{propertyCount.villa} Villas</h1>
          </ContentContainer>
        </ImageContainer>
        <ImageContainer>
          <img src={glamping} alt="" />
          <ContentContainer>
            <p className="font-bold">Cacabins</p>
            <h1>{propertyCount.cacabins} Cacabins</h1>
          </ContentContainer>
        </ImageContainer>
        <ImageContainer>
          <img src={gusthouse} alt="" />
          <ContentContainer>
            <p className="font-bold">Cottages</p>
            <h1>{propertyCount.cottage} Cottages</h1>
          </ContentContainer>
        </ImageContainer>
        <ImageContainer>
          <img src={hotel} alt="" />
          <ContentContainer>
            <p className="font-bold">Glampings</p>
            <h1>{propertyCount.glamping} Glampings</h1>
          </ContentContainer>
        </ImageContainer>
        <ImageContainer>
          <img src={resort} alt="" />
          <ContentContainer>
            <p className="font-bold">Hotels</p>
            <h1>{propertyCount.hotel} Hotels</h1>
          </ContentContainer>
        </ImageContainer>
        <ImageContainer>
          <img src={villa} alt="" />
          <ContentContainer>
            <p className="font-bold">Gust House</p>
            <h1>{propertyCount.gusthouse} Gust House</h1>
          </ContentContainer>
        </ImageContainer>
      </Carousel>
    </Container>
  );
};

export default PropertyType;
