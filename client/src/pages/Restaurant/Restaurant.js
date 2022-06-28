import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import axios from "axios";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
  md:w-4/5
  2xl:w-3/5
  mx-auto
  `}
`;
const Card = styled.div`
  ${tw`
        bg-white
        p-8
        mt-4
        flex
        flex-col
      justify-between
      justify-items-center
`}
  box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 2px 1px, rgba(0, 0, 0, 0.3) 0px 1px 1px -1px;
`;

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  // const [error, setError] = useState("");
  const pages = new Array(totalPages).fill(null).map((v, i) => i);
  console.log(pages);

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
                    <img src={restarurant.hotel.image} />
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
