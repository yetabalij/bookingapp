import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faPhone } from "@fortawesome/free-solid-svg-icons";

const HelpContainer = styled.div`
  ${tw`
    w-11/12
    md:w-4/5
    2xl:w-3/5
    mx-auto
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
const ContactContainer = styled.div`
  ${tw`
    sm:flex
  `}
`;
const LiveChatContainer = styled.div`
  ${tw`
    mr-12
  `}
`;
const CallUsContainer = styled.div`
  ${tw`
  
  `}
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
const SecondButton = styled.button`
  ${tw`
    text-secondary-color
    py-3
    px-4
    text-sm
    font-bold
    mt-4
    hover:bg-blue-100
    `}
  width:100%;
`;

const HelpContacts = () => {
  const navigate = useNavigate();
  return (
    <HelpContainer>
      <h6 className="py-5 text-xs font-medium">Help Center</h6>
      <h1 className="pb-5 text-4xl font-bold">Welcome to the Help Centre</h1>
      <p className="pb-3">
        Sign in to contact Customer Service, we're available 24 hours a day
      </p>
      <Card>
        <ContactContainer>
          <LiveChatContainer>
            <div className="flex justify-items-center mb-5">
              <FontAwesomeIcon
                className="text-secondary-color mr-3"
                icon={faComments}
                size="xl"
              />
              <h1 className="text-xl font-bold">Live Chat</h1>
            </div>
            <p className="ml-10">
              The fastest way to talk to one of our Customer Service agents
              about your bookings.
            </p>
          </LiveChatContainer>
          <CallUsContainer>
            <div className="flex justify-items-center mb-5">
              <FontAwesomeIcon
                className="text-secondary-color mr-3"
                icon={faPhone}
                size="xl"
              />
              <h1 className="text-xl font-bold">Live Chat</h1>
            </div>
            <p className="ml-10">
              For anything urgent, you can call us 24/7 on a local or
              international phone number.
            </p>
          </CallUsContainer>
        </ContactContainer>
        <Button onClick={() => navigate("/signin")}>Sign in</Button>
      </Card>
      <div>
        <SecondButton onClick={() => navigate("/helpwithoutaccount")}>
          Continue without an account
        </SecondButton>
      </div>
    </HelpContainer>
  );
};

export default HelpContacts;
