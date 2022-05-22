import React from "react";
import NavBar from "../../components/NavBar";
import "./ListYourPropertyHome.css";

const ListYourPropertyHome = () => {
  return (
    <div className="AppContainer">
      <NavBar />
      <div className="BodyContainer">
        <div className="HeaderContainer">
          <div className="HeaderSection md:w-4/5 2xl:w-3/5 mx-auto flex justify-between">
            <div className="LeaftSection">
              <div className="LeftSectionOne">Left section one</div>
              <div className="LeftSectionTwo">Left section two</div>
            </div>
            <div className="RightSection">rightsection</div>
          </div>
        </div>
      </div>
      <div className="FooterContainer">footer</div>
    </div>
  );
};

export default ListYourPropertyHome;
