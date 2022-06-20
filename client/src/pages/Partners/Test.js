import React from "react";
import { useSelector } from "react-redux";

const Test = ({ name }) => {
  const { Property, loading } = useSelector((state) => ({
    ...state.properties,
  }));
  console.log(Property);
  return (
    <div>
      {Property !== null && Property[0].name}
      test
    </div>
  );
};

export default Test;
