import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/Header";
import Card from "./../../components/Card";
import Container from "./../../components/Container";
import Footer from "../../components/Footer";
import Spinner from "./../../components/Spinner";
import axios from "axios";

const Sauna = () => {
  const [sauna, setSauna] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const gust = JSON.parse(localStorage.getItem("gustProfile"));
  const navigator = useNavigate();
  const pages = new Array(totalPages).fill(null).map((v, i) => i);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/sauna?page=${pageNumber}`)
      .then((res) => {
        setSauna(res.data.Sauna);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [pageNumber]);

  const onBookHandler = (sauna) => {
    if (gust === null) {
      localStorage.setItem("savedProperty", JSON.stringify(sauna));
      navigator("/signin");
    } else {
      localStorage.setItem("savedProperty", JSON.stringify(sauna));
      navigator("/booking");
    }
  };

  return (
    <div>
      <NavBar />
      <Container>
        {loading && <Spinner loading={loading} />}
        {sauna === null ? (
          <p>No Content</p>
        ) : (
          sauna.map((sauna) => {
            return (
              <Card key={sauna?._id}>
                <div className="sm:grid sm:grid-cols-4 sm:gap-4">
                  <div>
                    <img src={sauna?.hotel?.image} alt="hotel" />
                  </div>
                  <div className="mb-2">
                    <h3 className="font-bold">Property Information</h3>
                    <p>{sauna?.hotel?.name}</p>
                    <p>{sauna?.hotel?.city}</p>
                    <p>{sauna?.hotel?.address}</p>
                    <p>{sauna?.hotel?.distances}</p>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-bold">Facilities</h3>
                    {sauna?.bar === true ? <p>Bar</p> : null}
                    {sauna?.breakfast === "Yes" ? <p>Breakfast</p> : null}
                    {sauna?.freeWifi === true ? <p>Frer WiFi</p> : null}
                    {sauna?.frontDesk === true ? <p>24/7 Front Desk</p> : null}
                    {sauna?.hotTube === true ? <p>Sauna Bath</p> : null}
                    {sauna?.parking === "Yes" ? <p>Parking</p> : null}
                    {sauna?.spa === true ? <p>Spa</p> : null}
                    {sauna?.smoking === true ? <p>Smokking Area</p> : null}
                  </div>
                  <div>
                    <h3 className="font-bold">Room Information</h3>
                    <p>Price ${sauna?.price}</p>
                    <p>Room Type {sauna?.roomType}</p>
                    <p>Language {sauna?.language}</p>
                    <button
                      className="bg-primary-color text-white py-1 px-4 mt-2"
                      onClick={() => onBookHandler(sauna)}
                    >
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

export default Sauna;
