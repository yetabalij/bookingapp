import React from "react";
import HotelPicker from "./components/HotelPicker";
import PropertyType from "./components/PropertyType";
import CityProperty from "./components/CityProperty";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <HotelPicker />
      <PropertyType />
      <CityProperty />
      <Footer />
    </div>
  );
};

export default Home;
