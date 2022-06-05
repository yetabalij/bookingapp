import React from "react";
import NavBar from "../../components/NavBar";
import MainHeader from "../../components/MainHeader";
import HotelPicker from "./components/HotelPicker";
import PropertyType from "./components/PropertyType";

const Home = () => {
  return (
    <div>
      <NavBar />
      <MainHeader />
      <HotelPicker />
      <PropertyType />
      Home
    </div>
  );
};

export default Home;
