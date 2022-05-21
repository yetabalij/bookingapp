import React from "react";
import { useSelector } from "react-redux";
import NavBar from "./../components/NavBar";

const SearchHotels = () => {
  const { Hotels } = useSelector((state) => ({ ...state.searchHotels }));
  const res = Hotels.map((room, key) => {
    if (
      room.hotel !== null &&
      room.checkIn === null &&
      room.checkOut === null
    ) {
      return <h3 key={room._id}>{room.title}</h3>;
    } else {
      return <h2>List not Available</h2>;
    }
  });
  return (
    <NavBar>
      <p>Hello Ethiopia</p>
      <div>{res}</div>
    </NavBar>
  );
};

export default SearchHotels;
