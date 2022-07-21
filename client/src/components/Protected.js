import React from "react";

import { Outlet, Navigate } from "react-router-dom";

const Protected = () => {
  const partner = JSON.parse(localStorage.getItem("partnerProfile"));
  return partner ? <Outlet /> : <Navigate to="/partnersignin" />;
};

export default Protected;
