import React from "react";
import { useNavigate } from "react-router-dom";
//import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Button from "../../components/Button";

const Booking = () => {
  //const location = useLocation();
  //console.log(location.state);
  const savedProperty = JSON.parse(localStorage.getItem("savedProperty"));
  const navigator = useNavigate();
  return (
    <div>
      <Header />
      <Container>
        <Card>
          <h5>Booking Summary</h5>
          <p>{savedProperty.hotel.name}</p>
          <img alt="hotel" src={savedProperty.hotel.image} />
          <div className="flex mt-5">
            <Button className="text-white bg-secondary-color py-2 px-3 mr-3">
              Reserve Room
            </Button>
            <Button
              className="text-white bg-secondary-color py-2 px-3"
              onClick={() => {
                navigator("/");
                localStorage.removeItem("savedProperty");
              }}
            >
              Cancel
            </Button>
          </div>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default Booking;
