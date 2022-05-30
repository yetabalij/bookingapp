import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPartnerLogout } from "../../redux/features/Partners/partnersAuthSlice";
import { useNavigate } from "react-router-dom";

const PartnersDashboard = () => {
  const dispach = useDispatch();
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispach(setPartnerLogout());
    navigate("/partnersignin");
  };
  return (
    <div>
      PartnersDashboard
      <br />
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};

export default PartnersDashboard;
