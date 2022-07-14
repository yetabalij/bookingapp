import React from "react";

import { Outlet, Navigate } from "react-router-dom";

const GustProtected = ({ gust }) => {
  return gust ? <Outlet /> : <Navigate to="/signin" />;
};

export default GustProtected;
