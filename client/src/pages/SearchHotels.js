import React from "react";
import { useSelector } from "react-redux";
//import { searchHotels } from "./../redux/features/searchSlice";

const SearchHotels = () => {
  const { Hotels } = useSelector((state) => ({ ...state.searchHotels }));
  const res = Hotels.map((item) => {
    const { rooms } = item;
    const room = rooms.map((room) => {
      const { maxPeople } = room;
      return maxPeople;
    });
    return room;
  });

  console.log(res);
  return <div>SearchHotels</div>;
};

export default SearchHotels;
