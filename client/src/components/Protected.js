import React from "react";
import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const Protected = () => {
  const [token] = useState(false);
  return token ? <Outlet /> : <Navigate to="/partnersignin" />;
};

export default Protected;
