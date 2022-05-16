import React from "react";
import NavBar from "../../components/NavBar";
import MainHeader from "../../components/MainHeader";
import HotelPicker from "./components/HotelPicker";

const Home = () => {
  return (
    <div>
      <NavBar />
      <MainHeader />
      <HotelPicker />
      Home
    </div>
  );
};

export default Home;
