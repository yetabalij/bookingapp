import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const Room = () => {
  const { Property } = useSelector((state) => ({ ...state.properties }));
  const [data, setData] = useState([]);

  useEffect(() => {
    if (Property !== null && Property[0]?._id) {
      axios
        .get(
          `http://localhost:8000/api/rooms/roomsbyproperty/${Property[0]?._id}`
        )
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [Property]);

  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <NavBar />
        <ContentContainer>
          <Card>
            Room
            {data !== null &&
              data.map((item) => {
                console.log(item);
                return (
                  <Card key={item?._id}>
                    <h1>{item.name}</h1>
                  </Card>
                );
              })}
            <Button onClick={() => navigate("/addeditrooms")}>
              Add Another Room
            </Button>
          </Card>
        </ContentContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default Room;
