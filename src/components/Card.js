import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Card = (props) => {
  const menu = props.menu;
  const title = props.title;
  return (
    <div
      className="relative box-content h-80 w-80 m-1 mt-48 border border-gray-50  bg-black text-white sm:h-96 sm:w-96"
      style={{ borderColor: "#2F2F2F" }}
    >
      <div className="grid">
        <header className="flex justify-center">
          <Link to="/" exact>
            <p className="text-2xl font-lawi pt-4">LAWI</p>
          </Link>
        </header>
        <body className="grid justify-center font-body">
          {menu && <div className="font-title pt-14">{props.menu}</div>}
          {title && (
            <div className="flex justify-center font-title pt-5">
              {props.title}
            </div>
          )}
          <div className="mx-8 pt-4 font-body text-sm">{props.body}</div>
        </body>
      </div>
      <div className="">
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="bg-transparent hover:bg-gray-400 font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">
            Join
          </button>
        </div> */}
      </div>

      <div className="absolute bottom-2 text-xs w-full  flex justify-evenly px-4">
        <Nav />
      </div>
    </div>
  );
};

export default Card;
