import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Card = (props) => {
  const menu = props.menu;
  const title = props.title;
  const button = props.button;
  return (
    <div
      className="relative box-content h-80 w-80 mx-1 mt-48 border border-gray-50  bg-black text-white sm:h-96 sm:w-96"
      style={{ borderColor: "#2F2F2F" }}
    >
      <div className="grid justify-center mx-12">
        <Link to="/" exact>
          <p className="text-3xl pt-6 text-center font-lawi sm:text-4xl">
            LAWI
          </p>
        </Link>

        <body className="">
          {menu && (
            <div className="mt-14 sm:mt-16">
              <div className="text-sm sm:text-base text-center font-menu">
                {props.menu}
              </div>
            </div>
          )}
          {title && (
            <div className="mt-3 text-center font-title">{props.title}</div>
          )}
          <div className="mt-6 font-body text-sm sm:text-lg sm:mt-10">
            {props.body}
          </div>
        </body>
      </div>
      {/* <div className="">
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="bg-transparent hover:bg-gray-400 font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">
            Join
          </button>
        </div>
      </div> */}
      {button && (
        <div className="absolute bottom-14 w-full flex justify-center">
          <button className="bg-transparent hover:bg-white font-semibold hover:text-black py-1 px-4 sm:py-2 sm:px-8 sm:text-sm border  hover:border-transparent rounded-sm text-xs">
            {props.button}
          </button>
        </div>
      )}

      <div className="absolute bottom-3 text-xs w-full  flex justify-evenly px-4 text-gray-500 sm:text-base">
        <Nav />
      </div>
    </div>
  );
};

export default Card;
