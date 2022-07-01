import { useSelector } from "react-redux";

import styled from "styled-components";
import tw from "twin.macro";

import NavBar from "./components/NavBar";
import Card from "./../../components/Card";
import Footer from "../../components/Footer";

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
  const { Property } = useSelector((state) => ({ ...state.properties }));
  return (
    <Container>
      <NavBar />
      <ContentContainer>
        <Card>
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
