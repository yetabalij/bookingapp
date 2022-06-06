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

const Payment = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  return (
    <div>
      <Container>
        <QuestionContainer onClick={() => setIsActive(!isActive)}>
          <p>What payment methods are accepted?</p>
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
              Credit cards are the most widely-accepted payment method for
              properties listed on Booking.com, and most of them use credit
              cards to validate your booking. In some cases alternative payment
              methods such as PayPal etc. are also accepted. There are some
              exceptions to this, where it may be possible to book with a debit
              card. The accepted payment types for your accommodation will be
              listed in your booking confirmation. You can also call them to
              confirm what they accept.
            </p>
          </AnswerContainer>
        ) : null}
      </Container>
      <Horizontal />
      <Container>
        <QuestionContainer onClick={() => setIsActive2(!isActive2)}>
          <p>Can I pay with a deposit, or prepayment?</p>
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
              Some of our properties require a prepayment, also known as a
              deposit, before you stay. This prepayment can be up to the total
              cost of the booking, or just part of it. The rest is then paid
              when you stay at the property. However, for some properties there
              is no deposit required, and you’ll pay the amount in full when you
              stay at the property. It’s best to check the payment policies in
              your confirmation for more details.
            </p>
          </AnswerContainer>
        ) : null}
      </Container>
      <Horizontal />
      <Container>
        <QuestionContainer onClick={() => setIsActive3(!isActive3)}>
          <p>I’ve been charged. Do I need to do anything?</p>
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
              In most cases, no action is required from you. As outlined in the
              payment policy for your booking, this is likely just a prepayment
              for all or part of the total cost. If there is no prepayment
              policy, then the property may have taken a test payment from your
              card. This is a temporary hold, that’s used to guarantee your
              booking, and will be returned to you. If you still feel the charge
              is unexpected, you can contact us for assistance. We can only
              contact the property on your behalf after you have submitted proof
              of charge.
            </p>
          </AnswerContainer>
        ) : null}
      </Container>
      <Horizontal />
      <Container>
        <QuestionContainer onClick={() => setIsActive4(!isActive4)}>
          <p>Where can I see the payment policy for my booking?</p>
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
              You can find the payment policy in your booking confirmation, in
              the pricing section. This section also includes a price breakdown,
              and the accepted payment methods.
            </p>
          </AnswerContainer>
        ) : null}
      </Container>
      <Horizontal />
      <Container>
        <QuestionContainer onClick={() => setIsActive5(!isActive5)}>
          <p>How can I get an invoice?</p>
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
              The property can provide you with an invoice for your stay, so
              please contact them directly.
            </p>
          </AnswerContainer>
        ) : null}
      </Container>
    </div>
  );
};

export default Payment;
