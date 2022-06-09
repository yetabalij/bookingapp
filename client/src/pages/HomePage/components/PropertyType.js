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
    mt-14
    mb-20
  `}
`;
const ImageContainer = styled.div`
  ${tw`
    mr-5
    cursor-pointer
    select-none
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
  //console.log(propertyCount.appartment);
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-3">Browse by property type</h1>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        shouldResetAutoplay={false}
      >
        <ImageContainer>
          <img src={Appartment} onClick={() => navigate("/signin")} />
          <h1>{propertyCount.appartment} Appartments</h1>
        </ImageContainer>
        <ImageContainer>
          <img src={cacabins} />
          <h1>{propertyCount.resort} Resorts</h1>
        </ImageContainer>
        <ImageContainer>
          <img src={cottage} />
          <h1>{propertyCount.villa} Villas</h1>
        </ImageContainer>
        <ImageContainer>
          <img src={glamping} />
          <h1>{propertyCount.cacabins} Cacabins</h1>
        </ImageContainer>
        <ImageContainer>
          <img src={gusthouse} />
          <h1>{propertyCount.cottage} Cottages</h1>
        </ImageContainer>
        <ImageContainer>
          <img src={hotel} />
          <h1>{propertyCount.glamping} Glampings</h1>
        </ImageContainer>
        <ImageContainer>
          <img src={resort} />
          <h1>{propertyCount.hotel} Hotels</h1>
        </ImageContainer>
        <ImageContainer>
          <img src={villa} />
          <h1>Gust House{propertyCount.gusthouse} </h1>
        </ImageContainer>
      </Carousel>
    </Container>
  );
};

export default PropertyType;
