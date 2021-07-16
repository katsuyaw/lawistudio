import React from "react";
import { Link } from "react-router-dom";

const HomeCard = (props) => {
  const menu = props.menu;
  return (
    <div
      className="relative box-content h-80 w-80 mx-1 mt-48 border border-gray-50  bg-black text-white sm:h-96 sm:w-96"
      style={{ borderColor: "#2F2F2F" }}
    >
      <div className="grid justify-center mx-10">
        <Link to="/">
          <h1 className="text-3xl pt-6 text-center font-lawi sm:text-4xl">
            LAWI
          </h1>
        </Link>

        <div className="" key="body">
          {menu && (
            <div className="flex h-full mt-14 sm:mt-20">
              <div className="text-sm sm:text-base text-start font-menu ">
                {props.menu}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
