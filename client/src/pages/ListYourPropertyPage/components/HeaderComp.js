import React, { useEffect, useState } from "react";
import "./../ListYourPropertyHome.css";
import CreateNewListCard from "./CreateNewListCard";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(!toggle);
    }, 10000);
    return () => clearInterval(interval);
  }, [toggle]);
  return (
    <header>
      <div className="BodyContainer">
        <div className="HeaderContainer">
          <div className="HeaderSection w-11/12 md:w-4/5 2xl:w-3/5 mx-auto md:flex justify-between">
            <div className="LeaftSection">
              {toggle === true ? (
                <div className="LeftSectionOne ">
                  <p className="text-5xl font-bold mb-2">List</p>
                  <p className="text-5xl text-third-color font-bold mb-2">
                    anything
                  </p>
                  <p className="text-2xl sm:text-5xl font-bold mb-2">
                    on Booking.com
                  </p>
                  <p className="mt-4 text-sm sm:text-2xl">
                    Registration is free and can take as little as 15 minutes to
                    complete get started today
                  </p>
                </div>
              ) : (
                <div className="LeftSectionTwo ">
                  <p className="mb-4 text-5xl font-bold">List your</p>
                  <div className="animation">
                    <p className="text-5xl mb-10 text-third-color font-bold slide">
                      appartment
                    </p>
                    <p className="text-5xl mb-10 text-third-color font-bold slide">
                      hotel
                    </p>
                    <p className="text-5xl mb-10 text-third-color font-bold slide">
                      holiday home
                    </p>
                    <p className="text-5xl mb-10 text-third-color font-bold slide">
                      gust house
                    </p>
                    <p className="text-5xl mb-10 text-third-color font-bold slide">
                      beed and breakfast
                    </p>
                  </div>
                  <p className="text-2xl sm:text-5xl font-bold ">
                    on Booking.com
                  </p>
                  <p className="mt-4 text-sm sm:text-2xl">
                    Registration is free and can take as little as 15 minutes to
                    complete get started today
                  </p>
                </div>
              )}
            </div>
            <div className="RightSection">
              <CreateNewListCard />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
