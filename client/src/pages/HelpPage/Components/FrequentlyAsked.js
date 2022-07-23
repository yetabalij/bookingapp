import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faMoneyCheck,
  faMoneyCheckDollar,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";

import Accomodation from "./Accomodation";
import Payment from "./Payment";
import Pricing from "./Pricing";
import CreditCard from "./CreditCard";

const FrequentlAskedContainer = styled.div`
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
    my-6
    flex
    flex-col
    justify-between
    justify-items-center
`}
  box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 2px 1px, rgba(0, 0, 0, 0.3) 0px 1px 1px -1px;
`;
const TabContainer = styled.div`
  ${tw`
    sm:flex
    border-b-2
    p-6
    `}
`;
const Tab = styled.div`
  ${tw`
    pr-4
    select-none
    `}
`;
const IconContainer = styled.div`
  ${tw`
     
    `}// transform: translate(30%,-20%)
`;
const PanelContainer = styled.div`
  ${tw`
        
    `}
`;

const FrequentlyAsked = () => {
  const [tabState, setTabState] = useState(1);
  return (
    <div>
      <FrequentlAskedContainer>
        <h3 className="text-xl font-bold ">Frequently asked questions</h3>
        <Card>
          <TabContainer>
            <Tab>
              <h3
                className={`border-b-2 border-white px-1 pb-2 cursor-pointer ${
                  tabState === 1
                    ? "border-secondary-color text-secondary-color"
                    : ""
                }`}
                onClick={() => setTabState(1)}
              >
                <IconContainer>
                  <FontAwesomeIcon
                    className={` text-xl ${
                      tabState === 1 ? " text-secondary-color" : "text-gray-400"
                    }`}
                    icon={faHotel}
                  />
                </IconContainer>
                Accomodation
              </h3>
            </Tab>
            <Tab>
              <h3
                className={`border-b-2 border-white px-1 pb-2 cursor-pointer ${
                  tabState === 2
                    ? "border-secondary-color text-secondary-color"
                    : ""
                }`}
                onClick={() => setTabState(2)}
              >
                <IconContainer>
                  <FontAwesomeIcon
                    className={` text-xl ${
                      tabState === 2 ? " text-secondary-color" : "text-gray-400"
                    }`}
                    icon={faMoneyCheckDollar}
                  />
                </IconContainer>
                Payment
              </h3>
            </Tab>
            <Tab>
              <h3
                className={`border-b-2 border-white px-1 pb-2 cursor-pointer ${
                  tabState === 3
                    ? "border-secondary-color text-secondary-color"
                    : ""
                }`}
                onClick={() => setTabState(3)}
              >
                <IconContainer>
                  <FontAwesomeIcon
                    className={`text-xl ${
                      tabState === 3 ? " text-secondary-color" : "text-gray-400"
                    }`}
                    icon={faDollar}
                  />
                </IconContainer>
                Pricing
              </h3>
            </Tab>
            <Tab>
              <h3
                className={`border-b-2 border-white px-1 pb-2 cursor-pointer ${
                  tabState === 4
                    ? "border-secondary-color text-secondary-color"
                    : ""
                }`}
                onClick={() => setTabState(4)}
              >
                <IconContainer>
                  <FontAwesomeIcon
                    className={` text-xl ${
                      tabState === 4 ? " text-secondary-color" : "text-gray-400"
                    }`}
                    icon={faMoneyCheck}
                  />
                </IconContainer>
                Credit Cards
              </h3>
            </Tab>
          </TabContainer>
          <PanelContainer>
            {tabState === 1 ? (
              <Accomodation />
            ) : tabState === 2 ? (
              <Payment />
            ) : tabState === 3 ? (
              <Pricing />
            ) : tabState === 4 ? (
              <CreditCard />
            ) : null}
          </PanelContainer>
        </Card>
      </FrequentlAskedContainer>
    </div>
  );
};

export default FrequentlyAsked;
