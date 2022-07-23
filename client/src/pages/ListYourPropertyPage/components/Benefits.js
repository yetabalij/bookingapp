import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ListProperty from "./../../../images/ListYourProperty/listProperty.png";
import ImportDetails from "./../../../images/ListYourProperty/importDetails.png";
import Guidance from "./../../../images/ListYourProperty/guidance.png";
import Discount from "./../../../images/ListYourProperty/discount.png";

const Container = styled.div`
  ${tw`
    w-5/6
    md:w-4/5
    2xl:w-3/5
    mx-auto
    mb-20
    justify-items-center
    `}
`;
const ListContainer = styled.div`
  ${tw`
    mt-24
    sm:grid sm:grid-cols-2 sm:gap-12
    
    `}
`;
const Lists = styled.div`
  ${tw`
    mb-10
    `}
`;
const ImgContainer = styled.div`
  ${tw`
    
    `}
`;

const Benefits = () => {
  return (
    <div>
      <Container>
        <h1 className="text-4xl font-bold">Benefits of working with us</h1>
        <ListContainer>
          <Lists>
            <ImgContainer>
              <img src={ListProperty} alt="list property" />
            </ImgContainer>
            <p className="text-xl font-bold my-2">List any type of property</p>
            <p>
              Apartments to villas and everything in between can be listed for
              free.
            </p>
          </Lists>
          <Lists className="pl-16">
            <ImgContainer>
              <img src={ImportDetails} alt="list property" />
            </ImgContainer>
            <p className="text-xl font-bold my-2">Easily import details</p>
            <p>
              To save you time, many of the details from your existing listings
              can be imported.
            </p>
          </Lists>
          <Lists>
            <ImgContainer>
              <img src={Guidance} alt="list property" />
            </ImgContainer>
            <p className="text-xl font-bold my-2">Step-by-step guidance</p>
            <p>
              You’ll learn how our platform works, best practices, and things to
              watch out for.
            </p>
          </Lists>
          <Lists className="pl-16">
            <ImgContainer>
              <img src={Discount} alt="list property" />
            </ImgContainer>
            <p className="text-xl font-bold my-2">Exclusive discounts</p>
            <p>
              Discounts on products and services that save time and improve
              guests experience.
            </p>
          </Lists>
        </ListContainer>
      </Container>
    </div>
  );
};

export default Benefits;
