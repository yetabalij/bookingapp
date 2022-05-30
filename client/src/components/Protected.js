import React from "react";

import { Outlet, Navigate } from "react-router-dom";

const Protected = ({ partner }) => {
  return partner ? <Outlet /> : <Navigate to="/partnersignin" />;
};

export default Protected;
