import React from "react";
import { useSelector } from "react-redux";
//import { searchHotels } from "./../redux/features/searchSlice";

const SearchHotels = () => {
  const { Hotels } = useSelector((state) => ({ ...state.searchHotels }));
  const res = Hotels.map((room) => {
    if (room.hotel.city === "city 3" ) {
      return console.log(room);
    }
  });
  //console.log(Hotels);
  return <div>SearchHotels</div>;
};

export default SearchHotels;
