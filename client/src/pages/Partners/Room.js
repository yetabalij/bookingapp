import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
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
  const Property = JSON.parse(localStorage.getItem("partnerProperty"));
  const [data, setData] = useState([]);
  const [deletSuccess, setDeleteSuccess] = useState("");
  const navigate = useNavigate();

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
  }, []);

  const onDeleteHandler = (item) => {
    axios
      .delete(`http://localhost:8000/api/rooms/delete/${item._id}`)
      .then((res) => {
        setDeleteSuccess(res.data);
        navigate("/room");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(deletSuccess);
  return (
    <div>
      <Container>
        <NavBar />
        <ContentContainer>
          <Card>
            Room
            {data !== null &&
              data.map((item) => {
                return (
                  <Card key={item?._id}>
                    <h1>{item.name}</h1>
                    <div className="flex flex-row-reverse">
                      <FontAwesomeIcon
                        className="text-secondary-color"
                        icon={faTrash}
                        onClick={() => onDeleteHandler(item)}
                      />
                      <FontAwesomeIcon
                        className="text-secondary-color mr-2"
                        icon={faPen}
                      />
                    </div>
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
