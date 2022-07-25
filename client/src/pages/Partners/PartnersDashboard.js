import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { partnerProperty } from "../../redux/features/Properties/propertySlice";
import { useMediaQuery } from "react-responsive";

import styled from "styled-components";
import tw from "twin.macro";

import NavBar from "./components/NavBar";
import Card from "./../../components/Card";
import Footer from "../../components/Footer";
import Spinner from "./../../components/Spinner";
import PartnersMobNavBar from "./components/PartnersMobNavBar";

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
    mt-20
    justify-items-center
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

const PartnersDashboard = () => {
  const Partners = JSON.parse(localStorage.getItem("partnerProfile"));
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 740px)" });
  const [pressed, setPressed] = useState(false);

  const pressHandler = () => {
    setPressed(true);
  };

  const closeHandler = () => {
    setPressed(false);
  };

  const { Property, loading } = useSelector((state) => ({
    ...state.properties,
  }));
  const formValue = {
    partnerId: Partners?._id,
  };
  const dispach = useDispatch();

  useEffect(() => {
    dispach(partnerProperty(formValue));
  }, [Partners?._id]);

  return (
    <Container>
      {isTabletOrMobile ? (
        <div className="flex justify-end ">
          <PartnersMobNavBar pressed={pressed} closeHandler={closeHandler} />
          <div className="pr-5 pt-5">
            <button onClick={pressHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  stroke="blue"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <NavBar />
      )}
      <ContentContainer>
        <Card>
          {loading && <Spinner loading={loading} />}
          {Property !== null ? (
            <div>
              <p className="text-2xl font-medium">Property Detail</p>
              <div className="flex mt-7">
                <img
                  className="w-2/5 rounded"
                  src={Property[0]?.image}
                  alt="property"
                />
                <div className="ml-10">
                  <h3>{Property[0]?.name}</h3>
                  <h3>{Property[0]?.title}</h3>
                  <h3>{Property[0]?.address}</h3>
                  <h3>{Property[0]?.city}</h3>
                  <h3>{Property[0]?.distances}</h3>
                  <h3>{Property[0]?.type}</h3>
                  <h3>{Property[0]?.desc}</h3>
                </div>
              </div>
            </div>
          ) : (
            <h1>no record to show</h1>
          )}
          <Button>Edit Property</Button>
        </Card>
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default PartnersDashboard;
