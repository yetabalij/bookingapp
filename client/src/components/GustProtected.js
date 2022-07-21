import React from "react";

import { Outlet, Navigate } from "react-router-dom";

const GustProtected = () => {
  const gust = JSON.parse(localStorage.getItem("gustProfile"));
  return gust ? <Outlet /> : <Navigate to="/signin" />;
};

export default GustProtected;
