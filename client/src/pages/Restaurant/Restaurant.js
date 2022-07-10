import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/Header";
import Card from "./../../components/Card";
import Button from "./../../components/Button";
import Container from "./../../components/Container";
import Footer from "../../components/Footer";
import axios from "axios";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const gust = JSON.parse(localStorage.getItem("gustProfile"));
  const navigator = useNavigate();
  // const [error, setError] = useState("");
  const pages = new Array(totalPages).fill(null).map((v, i) => i);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/restaurant?page=${pageNumber}`)
      .then((res) => {
        setRestaurants(res.data.Restaurants);
        setTotalPages(res.data.totalPages);
      })
      .catch((error) => console.log(error));
  }, [pageNumber]);
  // console.log(`${error}`);
  const onBookHandler = (restarurant) => {
    if (gust === null) {
      localStorage.setItem("savedProperty", JSON.stringify(restarurant));
      navigator("/signin");
    } else {
      localStorage.setItem("savedProperty", JSON.stringify(restarurant));
      navigator("/booking");
    }
  };
  return (
    <div>
      <NavBar />
      <Container>
        {/* {error !== null && <p>{error}</p>} */}
        {restaurants === null ? (
          <p>...Loading</p>
        ) : (
          restaurants.map((restarurant) => {
            return (
              <Card key={restarurant._id}>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <img src={restarurant.hotel.image} alt="hotel" />
                  </div>
                  <div>
                    <p>{restarurant.hotel.name}</p>
                    <p>{restarurant.hotel.city}</p>
                    <p>{restarurant.hotel.address}</p>
                    <p>{restarurant.hotel.distances}</p>
                  </div>
                  <div>
                    {restarurant.bar === true ? <p>Bar</p> : null}
                    {restarurant.breakfast === "Yes" ? <p>Breakfast</p> : null}
                    {restarurant.freeWifi === true ? <p>Frer WiFi</p> : null}
                    {restarurant.frontDesk === true ? (
                      <p>24/7 Front Desk</p>
                    ) : null}
                    {restarurant.hotTube === true ? <p>Sauna Bath</p> : null}
                    {restarurant.parking === "Yes" ? <p>Parking</p> : null}
                    {restarurant.spa === true ? <p>Spa</p> : null}
                    {restarurant.smoking === true ? <p>Smokking Area</p> : null}
                  </div>
                  <div>
                    <p>Price ${restarurant.price}</p>
                    <p>Room Type {restarurant.roomType}</p>
                    <p>Language {restarurant.language}</p>
                    <Button
                      className={"bg-primary-color text-white py-1 px-4 mt-2"}
                      onClick={() => onBookHandler(restarurant)}
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

export default Restaurant;
