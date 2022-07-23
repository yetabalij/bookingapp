import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavBar from "./../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Container from "./../components/Container";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

const SearchHotels = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const gust = JSON.parse(localStorage.getItem("gustProfile"));
  const navigator = useNavigate();
  const searchResult = JSON.parse(localStorage.getItem("searchedProperties"));
  const { loading } = useSelector((state) => ({ ...state.searchHotels }));

  useEffect(() => {
    if (searchResult !== null) {
      setData(Object.values(searchResult));
    }
  }, [location?.state?.city, location?.state?.maxNumber]);

  const onBookHandler = (d) => {
    if (gust === null) {
      localStorage.setItem("savedProperty", JSON.stringify(d));
      navigator("/signin");
    } else {
      localStorage.setItem("savedProperty", JSON.stringify(d));
      navigator("/booking");
    }
  };

  return (
    <div>
      <NavBar />
      <Container>
        {loading && <Spinner loading={loading} />}
        {data.length === 0 ? (
          <Card>
            <p>No Content to show</p>
          </Card>
        ) : (
          data.map((d) => {
            return (
              <Card key={d._id}>
                <div className="sm:grid sm:grid-cols-4 sm:gap-4">
                  <div>
                    <img src={d?.hotel?.image} alt="'" />
                  </div>
                  <div className="mb-2">
                    <h3 className="font-bold">Property Information</h3>
                    <p>{d?.hotel?.name}</p>
                    <p>{d?.hotel?.city}</p>
                    <p>{d?.hotel?.address}</p>
                    <p>{d?.hotel?.distances}</p>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-bold">Facilities</h3>
                    {d?.bar === true ? <p>Bar</p> : null}
                    {d?.breakfast === "Yes" ? <p>Breakfast</p> : null}
                    {d?.freeWifi === true ? <p>Frer WiFi</p> : null}
                    {d?.frontDesk === true ? <p>24/7 Front Desk</p> : null}
                    {d?.hotTube === true ? <p>Sauna Bath</p> : null}
                    {d?.parking === "Yes" ? <p>Parking</p> : null}
                    {d?.spa === true ? <p>Spa</p> : null}
                    {d?.smoking === true ? <p>Smokking Area</p> : null}
                  </div>
                  <div>
                    <h3 className="font-bold">Room Information</h3>
                    <p>Price ${d.price}</p>
                    <p>Room Type {d.roomType}</p>
                    <p>Language {d.language}</p>
                    <button
                      className="bg-primary-color text-white py-1 px-4 mt-2"
                      onClick={() => onBookHandler(d)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default SearchHotels;
