import React from "react";
import NavBar from "./../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import tw from "twin.macro";
import Card from "../components/Card";

const Container = styled.div`
  ${tw`
  md:w-4/5
  2xl:w-3/5
  mx-auto
  `}
`;

const SearchHotels = () => {
  const data = Object.values(
    JSON.parse(localStorage.getItem("searchedProperties"))
  );

  return (
    <div>
      <NavBar />
      <Container>
        {data !== null &&
          data.map((d) => {
            return (
              <Card key={d._id}>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <img src={d.hotel.image} alt="'" />
                  </div>
                  <div>
                    <p>{d.hotel.name}</p>
                    <p>{d.hotel.city}</p>
                    <p>{d.hotel.address}</p>
                    <p>{d.hotel.distances}</p>
                  </div>
                  <div>
                    {d.bar === true ? <p>Bar</p> : null}
                    {d.breakfast === "Yes" ? <p>Breakfast</p> : null}
                    {d.freeWifi === true ? <p>Frer WiFi</p> : null}
                    {d.frontDesk === true ? <p>24/7 Front Desk</p> : null}
                    {d.hotTube === true ? <p>Sauna Bath</p> : null}
                    {d.parking === "Yes" ? <p>Parking</p> : null}
                    {d.spa === true ? <p>Spa</p> : null}
                    {d.smoking === true ? <p>Smokking Area</p> : null}
                  </div>
                  <div>
                    <p>Price ${d.price}</p>
                    <p>Room Type {d.roomType}</p>
                    <p>Language {d.language}</p>
                    <button className="bg-primary-color text-white py-1 px-4 mt-2">
                      Book Now
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
      </Container>
      <Footer />
    </div>
  );
};

export default SearchHotels;
