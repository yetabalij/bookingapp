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
      return (
        <div key={room._id}>
          <p>{`${Hotels.length} Property Available`}</p>
          <h3>{room.title}</h3>
        </div>
      );
    } else {
      return <h2>List not Available</h2>;
    }
  });
  return (
    <div>
      <div>{res}</div>
    </div>
  );
};

export default SearchHotels;
