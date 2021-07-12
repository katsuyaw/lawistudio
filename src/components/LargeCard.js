import React from "react";
import Nav from "./Nav";
import MoreNav from "./MoreNav";
import { NavLink, Link } from "react-router-dom";

const LargeCard = (props) => {
  const title = props.title;

  return (
    <div className="h-screen flex justify-center items-center ">
      <div
        className="relative box-content h-5/6 w-5/6 mx-1 border border-gray-50  bg-black text-white"
        style={{ borderColor: "#2F2F2F" }}
      >
        <div className="flex flex-col justify-center items-center mx-5">
          <Link to="/" exact>
            <h1 className="text-3xl py-6 text-center font-lawi sm:text-4xl">
              LAWI
            </h1>
          </Link>

          <body className="">
            {title && (
              <div className="mt-3 text-center font-title">{props.title}</div>
            )}
            <div className="font-body text-center text-sm sm:text-base sm:mt-10 overflow-auto  h-96 px-10 sm:px-64">
              {props.body}
            </div>
          </body>
          <NavLink
            to="/works"
            activeStyle={{ color: "gray" }}
            className="w-2 h-auto mt-10"
          >
            <p className="text-base leading-3 sm:leading-5 text-gray-500 hover:text-white">
              -
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
