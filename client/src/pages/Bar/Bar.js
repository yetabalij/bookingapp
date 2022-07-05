import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import axios from "axios";
import Header from "../../components/Header";
import Card from "./../../components/Card";
import Container from "./../../components/Container";
import Button from "./../../components/Button";

const Bar = () => {
  const [bar, setBar] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  // const [error, setError] = useState("");
  const pages = new Array(totalPages).fill(null).map((v, i) => i);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/bar?page=${pageNumber}`)
      .then((res) => {
        setBar(res.data.Bar);
        setTotalPages(res.data.totalPages);
      })
      .catch((error) => console.log(error));
  }, [pageNumber]);
  // console.log(`${error}`);
  return (
    <div>
      <Header />
      <Container>
        {/* {error !== null && <p>{error}</p>} */}
        {bar === null ? (
          <p>...Loading</p>
        ) : (
          bar.map((bar) => {
            return (
              <Card key={bar._id}>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <img src={bar.hotel.image} alt="Hotel" />
                  </div>
                  <div>
                    <p>{bar.hotel.name}</p>
                    <p>{bar.hotel.city}</p>
                    <p>{bar.hotel.address}</p>
                    <p>{bar.hotel.distances}</p>
                  </div>
                  <div>
                    {bar.bar === true ? <p>Bar</p> : null}
                    {bar.breakfast === "Yes" ? <p>Breakfast</p> : null}
                    {bar.freeWifi === true ? <p>Frer WiFi</p> : null}
                    {bar.frontDesk === true ? <p>24/7 Front Desk</p> : null}
                    {bar.hotTube === true ? <p>Sauna Bath</p> : null}
                    {bar.parking === "Yes" ? <p>Parking</p> : null}
                    {bar.spa === true ? <p>Spa</p> : null}
                    {bar.smoking === true ? <p>Smokking Area</p> : null}
                  </div>
                  <div>
                    <p>Price ${bar.price}</p>
                    <p>Room Type {bar.roomType}</p>
                    <p>Language {bar.language}</p>
                    <Button
                      onClick={() => alert(bar.hotel.name)}
                      className="bg-primary-color text-white py-1 px-4 mt-2"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })
        )}
        <div>
          <button
            onClick={() => setPageNumber(Math.max(0, pageNumber - 1))}
            className="bg-primary-color text-white py-1 px-3 my-6"
          >
            Previous
          </button>
          {pages.map((index) => {
            return (
              <button
                className="bg-primary-color text-white mx-1 py-1 px-3 my-6"
                onClick={() => setPageNumber(index)}
                key={index}
              >
                {index + 1}
              </button>
            );
          })}
          <button
            onClick={() =>
              setPageNumber(Math.min(totalPages - 1, pageNumber + 1))
            }
            className="bg-primary-color text-white py-1 px-3 my-6"
          >
            Next
          </button>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Bar;
