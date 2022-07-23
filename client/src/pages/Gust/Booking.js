import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Button from "../../components/Button";

const Booking = () => {
  const savedProperty = JSON.parse(localStorage.getItem("savedProperty"));
  const gust = JSON.parse(localStorage.getItem("gustProfile"));
  const navigator = useNavigate();
  const [book, setBook] = useState(false);
  return (
    <div>
      <Header />
      <Container>
        {book && (
          <div className="bg-green-300 p-2 mt-5">
            <p>Your Order Placed Successfully.</p>
          </div>
        )}
        <Card>
          <h5>Booking Summary</h5>
          <p>Property Name: {savedProperty?.hotel?.name}</p>
          <p>Address: {savedProperty?.hotel?.address}</p>
          <p>Distance: {savedProperty?.hotel?.distances} from the City</p>
          <p>Room Name: {savedProperty?.name} </p>
          <p>Room Type: {savedProperty?.roomType}</p>
          <p>Price: ${savedProperty?.price} </p>
          <p>Maximum Number: {savedProperty?.maxNumber} </p>
          <img
            alt="hotel"
            src={savedProperty?.hotel?.image}
            className="sm:w-1/3"
          />
          <div className="flex mt-5">
            <Button
              className="text-white bg-secondary-color py-2 px-3 mr-3"
              onClick={() => setBook(true)}
            >
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
