import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HotelPicker from "./components/HotelPicker";
import PropertyType from "./components/PropertyType";
import CityProperty from "./components/CityProperty";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  const savedProperty = JSON.parse(localStorage.getItem("savedProperty"));
  const gust = JSON.parse(localStorage.getItem("gustProfile"));
  const navigator = useNavigate();
  useEffect(() => {
    if (savedProperty && gust) {
      navigator("/booking");
    }
  }, []);
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
