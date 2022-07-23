import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ContainerBackground = styled.div`
  ${tw`
    bg-gray-100
    `}
`;
const Container = styled.div`
  ${tw`
    w-5/6
    md:w-4/5
    2xl:w-3/5
    mx-auto
    pt-4
    md:pt-2
    lg:pt-3
    2xl:pt-12
    mt-12
    mb-20
    `}
`;
const TitleContainer = styled.div`
  ${tw`      
    `}
`;
const CardContainer = styled.div`
  ${tw`
     sm:flex  
     justify-between
    `}
`;
const Card = styled.div`
  ${tw`
        bg-white
        p-8
        sm:mt-4
        sm:mb-16
        mb-4
    `}
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const ListContainer = styled.div`
  ${tw`
    mt-6
    `}
`;
const Lists = styled.div`
  ${tw`
    flex
    justify-items-center
    pb-4
    `}
`;
const LearnMore = styled.button`
  ${tw`
    bg-white
    text-blue-500
    mt-2
    py-2
    px-4
    text-sm
    font-bold
    border-blue-500
    `}
  border: 1px solid
`;

const BestDescribesYou = () => {
  return (
    <div>
      <ContainerBackground>
        <Container>
          <TitleContainer>
            <h1 className="text-4xl font-bold">Which best describes you?</h1>
            <p className="text-gray-500 my-4">
              Select one of the options to see customised information
            </p>
          </TitleContainer>
          <CardContainer>
            <Card>
              <p className="font-bold mb-4">
                I have a property that I rent out occasionally
              </p>
              <ListContainer>
                <Lists>
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    icon={faCheck}
                    size="lg"
                  />
                  <p className="ml-4 ">
                    This property is where I keep my personal belongings
                  </p>
                </Lists>
                <Lists>
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    icon={faCheck}
                    size="lg"
                  />
                  <p className="ml-4 ">
                    I have limited experience working in the hospitality
                    industry
                  </p>
                </Lists>
              </ListContainer>
              <LearnMore>Learn more</LearnMore>
            </Card>
            <Card>
              <p className="font-bold mb-4">
                I have multiple properties that I rent out year-round
              </p>
              <ListContainer>
                <Lists>
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    icon={faCheck}
                    size="lg"
                  />
                  <p className="ml-4 ">
                    These properties are primarily used for guests
                  </p>
                </Lists>
                <Lists>
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    icon={faCheck}
                    size="lg"
                  />
                  <p className="ml-4 ">
                    I have experience working in the hospitality industry
                  </p>
                </Lists>
              </ListContainer>
              <LearnMore>Learn more</LearnMore>
            </Card>
          </CardContainer>
        </Container>
      </ContainerBackground>
    </div>
  );
};

export default BestDescribesYou;
