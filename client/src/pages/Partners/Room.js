import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Card from "./../../components/Card";
import Footer from "../../components/Footer";

import WarnningDialog from "../../components/WarnningDialog";
import { useMediaQuery } from "react-responsive";
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

const Room = () => {
  const Property = JSON.parse(localStorage.getItem("partnerProperty"));
  const [data, setData] = useState([]);
  const [deletSuccess, setDeleteSuccess] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const navigate = useNavigate();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 740px)" });
  const [pressed, setPressed] = useState(false);

  const pressHandler = () => {
    setPressed(true);
  };

  const closeHandler = () => {
    setPressed(false);
  };

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
  }, [deletSuccess]);
  const onDeleteHandler = () => {
    return setIsDelete(true);
  };
  const onYesHandler = () => {
    axios
      .delete(`http://localhost:8000/api/rooms/delete/${deleteId}`)
      .then((res) => {
        setDeleteSuccess(res.data);
        setIsDelete(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
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
          {isDelete === true ? (
            <WarnningDialog
              onYesHandler={onYesHandler}
              onNoHandler={() => setIsDelete(false)}
            />
          ) : null}
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
                        onClick={() => {
                          setDeleteId(item?._id);
                          onDeleteHandler();
                        }}
                      />
                      {/* <FontAwesomeIcon
                        className="text-secondary-color mr-2"
                        icon={faPen}
                        onClick={() => {
                          navigate("/addeditrooms", { state: item });
                        }}
                      /> */}
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
