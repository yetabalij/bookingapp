import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import "./ListYourPropertyHome.css";

const ListYourPropertyHome = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(!toggle);
    }, 10000);
    return () => clearInterval(interval);
  }, [toggle]);

  return (
    <div className="AppContainer">
      <NavBar />
      <div className="BodyContainer">
        <div className="HeaderContainer">
          <div className="HeaderSection md:w-4/5 2xl:w-3/5 mx-auto flex justify-between">
            <div className="LeaftSection">
              {/* <div className="LeftSectionOne">Left section one</div>
              <div className="LeftSectionTwo">Left section two</div> */}
              {toggle === true ? (
                <div className="LeftSectionOne ">
                  <p className="text-2xl">List</p>
                  <p className="text-2xl">anything</p>
                  <p className="text-2xl">on Booking.com</p>
                </div>
              ) : (
                <div className="LeftSectionTwo ">
                  {/* <p className="text-2xl my-10 ">List your</p> */}
                  <div className="animation">
                    <p className="text-2xl mt-6 slide">appartment</p>
                    <p className="text-2xl mt-6 slide">hotel</p>
                    <p className="text-2xl mt-6 slide">holiday home</p>
                    <p className="text-2xl mt-6 slide">gust house</p>
                    <p className="text-2xl mt-6 slide">beed and breakfast</p>
                  </div>
                  {/* <p className="text-2xl my-10 ">on Booking.com</p> */}
                </div>
              )}
            </div>
            <div className="RightSection text-white">rightsection</div>
          </div>
        </div>
      </div>
      <div className="FooterContainer">footer</div>
    </div>
  );
};

export default ListYourPropertyHome;
