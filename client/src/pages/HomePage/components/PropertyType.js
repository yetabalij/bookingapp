import React, { useState, useEffect } from "react";
import axios from "axios";

const PropertyType = () => {
  const [propertyType, setPropertyType] = useState([]);
  const [countApparment, setCountAppartment] = useState(0);
  try {
    useEffect(() => {
      axios
        .get("http://localhost:8000/api/propertyType")
        .then((res) => setPropertyType(res.data));
    }, []);
  } catch (err) {
    console.log(err);
  }
  //console.log(propertyType);
  const disp = propertyType.map((pType) => {
    const { type } = pType;
    if (type === "appartment") {
      //setCountAppartment(countApparment++);
      return countApparment;
    }
  });
  console.log(countApparment);
  return <div>{disp}</div>;
};

export default PropertyType;
