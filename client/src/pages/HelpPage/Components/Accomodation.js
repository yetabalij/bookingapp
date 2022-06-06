import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  ${tw`
    
  `}
`;
const QuestionContainer = styled.div`
  ${tw`
    hover:bg-gray-100
    py-4
    px-6
    cursor-pointer
    select-none
    flex
    justify-between
    justify-items-center
  `}
`;
const IconContainer = styled.div`
  ${tw`
     
    `}
  transform: translate(30%,-20%)
`;
const AnswerContainer = styled.div`
  ${tw`
    py-4
    px-6
  `}
`;
const Horizontal = styled.hr`
  ${tw`
  
  `}
  border-bottom: 3px solid #fefefe;
`;

const Accomodation = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  return (
    <div>
      <Container>
        <QuestionContainer onClick={() => setIsActive(!isActive)}>
          <p>Can I cancel my booking?</p>
          <IconContainer>
            {isActive === false ? (
              <FontAwesomeIcon icon={faAngleRight} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </IconContainer>
        </QuestionContainer>
        {isActive === true ? (
          <AnswerContainer>
            <p>
              Yes, any cancellation fees are determined by the property and
              listed in your cancellation policy. You will pay any additional
              costs to the property.
            </p>
          </AnswerContainer>
        ) : null}
      </Container>
      <Horizontal />
      <Container>
        <QuestionContainer onClick={() => setIsActive2(!isActive2)}>
          <p>If I need to cancel my booking, will I pay a fee?</p>
          <IconContainer>
            {isActive2 === false ? (
              <FontAwesomeIcon icon={faAngleRight} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </IconContainer>
        </QuestionContainer>
        {isActive2 === true ? (
          <AnswerContainer>
            <p>
              If you have a free cancellation booking, you won't pay a
              cancellation fee. If your booking is no longer free to cancel or
              is non-refundable, you may incur a cancellation fee. Any
              cancellation fees are determined by the property. You will pay any
              additional costs to the property.
            </p>
          </AnswerContainer>
        ) : null}
      </Container>
      <Horizontal />
      <Container>
        <QuestionContainer onClick={() => setIsActive3(!isActive3)}>
          <p>How do I know if my booking was cancelled?</p>
          <IconContainer>
            {isActive3 === false ? (
              <FontAwesomeIcon icon={faAngleRight} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </IconContainer>
        </QuestionContainer>
        {isActive3 === true ? (
          <AnswerContainer>
            <p>
              After you cancel a booking with us, you should receive an email
              confirming the cancellation. Check your inbox and spam/junk mail
              folders. If you don’t receive an email within 24 hours, please
              contact the property to confirm they got your cancellation.
            </p>
          </AnswerContainer>
        ) : null}
      </Container>
      <Horizontal />
      <Container>
        <QuestionContainer onClick={() => setIsActive4(!isActive4)}>
          <p>How do I know if my booking was cancelled?</p>
          <IconContainer>
            {isActive4 === false ? (
              <FontAwesomeIcon icon={faAngleRight} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </IconContainer>
        </QuestionContainer>
        {isActive4 === true ? (
          <AnswerContainer>
            <p>
              After you cancel a booking with us, you should receive an email
              confirming the cancellation. Check your inbox and spam/junk mail
              folders. If you don’t receive an email within 24 hours, please
              contact the property to confirm they got your cancellation.
            </p>
          </AnswerContainer>
        ) : null}
      </Container>
      <Horizontal />
      <Container>
        <QuestionContainer onClick={() => setIsActive5(!isActive5)}>
          <p>Is it possible to get an extra bed or cot for a child?</p>
          <IconContainer>
            {isActive5 === false ? (
              <FontAwesomeIcon icon={faAngleRight} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </IconContainer>
        </QuestionContainer>
        {isActive5 === true ? (
          <AnswerContainer>
            <p>
              It depends on the property's policy. Additional costs for
              children, including extra beds/cots, are not included in the
              reservation price. Please contact the property directly for this
              information.
            </p>
          </AnswerContainer>
        ) : null}
      </Container>
    </div>
  );
};

export default Accomodation;
