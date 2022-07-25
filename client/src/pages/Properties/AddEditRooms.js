import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import NavBar from "./../Partners/components/NavBar";
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

const Select = styled.select`
  ${tw`
  w-full
  p-1
  mb-3
  `}
  border: 1px solid gray;
`;
const InputCheck = styled.input`
  ${tw`
  ml-5
  `}
  border: 1px solid gray;
`;
const Input = styled.input`
  ${tw`
  w-full
  p-1
  mb-3
  `}
  border: 1px solid gray;
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

const Rooms = () => {
  const { Property } = useSelector((state) => ({ ...state.properties }));
  const [hotel, setHotel] = useState("");
  const [name, setName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [maxNumber, setMaxNumber] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const [price, setPrice] = useState("");
  const [parking, setParking] = useState("");
  const [breakfast, setBreakFast] = useState("");
  const [language, setLanguage] = useState("");
  const [freeWifi, setFreeWifi] = useState(false);
  const [restaurant, setRestaurant] = useState(false);
  const [roomService, setRoomService] = useState(false);
  const [frontDesk, setFrontDesk] = useState(false);
  const [bar, setBar] = useState(false);
  const [smoking, setSmoking] = useState(false);
  const [spa, setSpa] = useState(false);
  const [hotTube, setHoteTube] = useState(false);
  const [airConditioning, setAirConditioning] = useState(false);
  const [sauna, setSauna] = useState(false);

  useEffect(() => {
    if (Property !== null) {
      setHotel(Property[0]?._id);
    }
  }, [Property]);
  const formValue = {
    hotel: hotel,
    name: name,
    roomType: roomType,
    maxNumber: Number(maxNumber),
    numberOfRooms: Number(numberOfRooms),
    price: Number(price),
    parking: parking,
    breakfast: breakfast,
    language: language,
    freeWifi: freeWifi,
    restaurant: restaurant,
    roomService: roomService,
    frontDesk: frontDesk,
    bar: bar,
    smoking: smoking,
    spa: spa,
    hotTube: hotTube,
    airConditioning: airConditioning,
    sauna: sauna,
  };

  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/rooms/create", formValue);
    navigate("/room");
  };

  return (
    <Container>
      <NavBar />
      <ContentContainer>
        <form onSubmit={onSubmitHandler}>
          <Card>
            <div className="w-4/6 ml-[auto] mr-[auto]">
              <p className="text-2xl font-bold mb-5">Price and Layout</p>
              <label>Room Name</label>
              <br />
              <Select onChange={(e) => setName(e.target.value)}>
                <option value="" disabled selected>
                  Select room names
                </option>
                <option value="Budget Double Room">Budget Double Room</option>
                <option value="Gusiness Double Room with Gym Access">
                  Gusiness Double Room with Gym Access
                </option>
                <option value="Deluxe Double Room with Balcony">
                  Deluxe Double Room with Balcony
                </option>
                <option value="Deluxe Double Room with Bath">
                  Deluxe Double Room with Bath
                </option>
                <option value="Deluxe Double Romm with Extra Bed">
                  Deluxe Double Romm with Extra Bed
                </option>
                <option value="Deluxe Double Room with Shower">
                  Deluxe Double Room with Shower
                </option>
              </Select>
              <br />
              <label>Room Type</label>
              <br />
              <Select onChange={(e) => setRoomType(e.target.value)}>
                <option value="" disabled selected>
                  Select room types
                </option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Twin">Twin</option>
                <option value="Triple">Triple</option>
                <option value="Quad">Quad</option>
                <option value="Family">Family</option>
                <option value="Suite">Suite</option>
                <option value="Studio">Studio</option>
              </Select>
              <br />
              <label>Maximun Number To Stay</label>
              <br />
              <Input
                type="text"
                value={maxNumber}
                onChange={(e) => setMaxNumber(e.target.value)}
                placeholder="Maximum Number to Stay"
              />
              <br />
              <label>Number of Rooms</label>
              <br />
              <Input
                type="text"
                value={numberOfRooms}
                onChange={(e) => setNumberOfRooms(e.target.value)}
                placeholder="Number of Rooms"
              />
              <br />
              <label>Price</label>
              <br />
              <Input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </div>
          </Card>
          <Card>
            <div className="w-4/6 ml-[auto] mr-[auto]">
              <p className="text-2xl font-bold mb-5">Facilities</p>
              <label>Parking</label>
              <br />
              <Select onChange={(e) => setParking(e.target.value)}>
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Select>
              <br />
              <label>Breakfast</label>
              <br />
              <Select onChange={(e) => setBreakFast(e.target.value)}>
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Select>
              <br />
              <label>Language</label>
              <br />
              <Select onChange={(e) => setLanguage(e.target.value)}>
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value="English">English</option>
                <option value="Chines">Chines</option>
                <option value="French">French</option>
                <option value="Arabic">Arabic</option>
                <option value="Amharic">Amharic</option>
              </Select>
            </div>
          </Card>
          <Card>
            <p className="text-2xl font-bold mb-5 w-4/6 ml-[auto] mr-[auto]">
              Popular facilities with gusts
            </p>
            <div className="w-4/6 ml-[auto] mr-[auto] grid grid-cols-2 gap-2 content-center items-center">
              <div className="flex flex-col">
                <div className="flex items-center justify-start">
                  <label>Free wifi</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    value={freeWifi}
                    onChange={() => setFreeWifi(!freeWifi)}
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>Restaurant</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    value={restaurant}
                    onChange={() => setRestaurant(!restaurant)}
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>Room Service</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    value={roomService}
                    onChange={() => setRoomService(!roomService)}
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>24-hours front desk</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    value={frontDesk}
                    onChange={() => setFrontDesk(!frontDesk)}
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>Bar Facilities</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    value={bar}
                    onChange={() => setBar(!bar)}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-start">
                  <label>None Smoking Rooms</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    value={smoking}
                    onChange={() => setSmoking(!smoking)}
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>Spa & Wellness Center</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    value={spa}
                    onChange={() => setSpa(!spa)}
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>Hot tube && Jacuzzi</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    value={hotTube}
                    onChange={() => setHoteTube(!hotTube)}
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>Air Conditioning</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    value={airConditioning}
                    onChange={() => setAirConditioning(!airConditioning)}
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>Sauna</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    value={sauna}
                    onChange={() => setSauna(!sauna)}
                  />
                </div>
              </div>
            </div>
          </Card>
          {/* <Card>
            <div className=" w-4/6 ml-[auto] mr-[auto]">
              Photo
              <Input type="file"></Input>
            </div>
          </Card> */}
          <Card>
            <Button type="submit">Add Room</Button>
          </Card>
        </form>
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default Rooms;
