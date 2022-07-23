import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/Header";
import Card from "./../../components/Card";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Spinner from "./../../components/Spinner";
import axios from "axios";

const Spa = () => {
  const [spa, setSpa] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigator = useNavigate();
  const gust = JSON.parse(localStorage.getItem("gustProfile"));
  const pages = new Array(totalPages).fill(null).map((v, i) => i);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/spa?page=${pageNumber}`)
      .then((res) => {
        setSpa(res.data.Spa);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [pageNumber]);

  const onBookHandler = (spa) => {
    if (gust === null) {
      localStorage.setItem("savedProperty", JSON.stringify(spa));
      navigator("/signin");
    } else {
      localStorage.setItem("savedProperty", JSON.stringify(spa));
      navigator("/booking");
    }
  };
  return (
    <div>
      <NavBar />
      {loading && <Spinner loading={loading} />}
      <Container>
        {spa === null ? (
          <p>No Content</p>
        ) : (
          spa.map((spa) => {
            return (
              <Card key={spa?._id}>
                <div className="sm:grid sm:grid-cols-4 sm:gap-4">
                  <div>
                    <img src={spa?.hotel?.image} alt="Hotel" />
                  </div>
                  <div className="mb-2">
                    <h3 className="font-bold">Property Information</h3>
                    <p>{spa?.hotel?.name}</p>
                    <p>{spa?.hotel?.city}</p>
                    <p>{spa?.hotel?.address}</p>
                    <p>{spa?.hotel?.distances}</p>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-bold">Facilities</h3>
                    {spa?.spa === true ? <p>spa</p> : null}
                    {spa?.breakfast === "Yes" ? <p>Breakfast</p> : null}
                    {spa?.freeWifi === true ? <p>Frer WiFi</p> : null}
                    {spa?.frontDesk === true ? <p>24/7 Front Desk</p> : null}
                    {spa?.hotTube === true ? <p>Sauna Bath</p> : null}
                    {spa?.parking === "Yes" ? <p>Parking</p> : null}
                    {spa?.spa === true ? <p>Spa</p> : null}
                    {spa?.smoking === true ? <p>Smokking Area</p> : null}
                  </div>
                  <div>
                    <h3 className="font-bold">Room Information</h3>
                    <p>Price ${spa?.price}</p>
                    <p>Room Type {spa?.roomType}</p>
                    <p>Language {spa?.language}</p>
                    <button
                      className="bg-primary-color text-white py-1 px-4 mt-2"
                      onClick={() => onBookHandler(spa)}
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

export default Spa;
