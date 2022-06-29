import React, { useEffect, useState } from "react";
import NavBar from "../../components/Header";
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

const Spa = () => {
  const [spa, setSpa] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  // const [error, setError] = useState("");
  const pages = new Array(totalPages).fill(null).map((v, i) => i);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/spa?page=${pageNumber}`)
      .then((res) => {
        setSpa(res.data.Spa);
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
        {spa === null ? (
          <p>...Loading</p>
        ) : (
          spa.map((spa) => {
            return (
              <Card key={spa._id}>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <img src={spa.hotel.image} alt="Hotel" />
                  </div>
                  <div>
                    <p>{spa.hotel.name}</p>
                    <p>{spa.hotel.city}</p>
                    <p>{spa.hotel.address}</p>
                    <p>{spa.hotel.distances}</p>
                  </div>
                  <div>
                    {spa.spa === true ? <p>spa</p> : null}
                    {spa.breakfast === "Yes" ? <p>Breakfast</p> : null}
                    {spa.freeWifi === true ? <p>Frer WiFi</p> : null}
                    {spa.frontDesk === true ? <p>24/7 Front Desk</p> : null}
                    {spa.hotTube === true ? <p>Sauna Bath</p> : null}
                    {spa.parking === "Yes" ? <p>Parking</p> : null}
                    {spa.spa === true ? <p>Spa</p> : null}
                    {spa.smoking === true ? <p>Smokking Area</p> : null}
                  </div>
                  <div>
                    <p>Price ${spa.price}</p>
                    <p>Room Type {spa.roomType}</p>
                    <p>Language {spa.language}</p>
                    <button className="bg-primary-color text-white py-1 px-4 mt-2">
                      Book Now
                    </button>
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

export default Spa;