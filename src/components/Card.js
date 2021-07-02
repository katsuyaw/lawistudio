import React from "react";
import Nav from "./Nav";

const Card = (props) => {
  const menu = props.menu;
  return (
    <div
      className="box-content h-80 w-80 p-12 border border-gray-50 mt-40 bg-black text-white "
      style={{ borderColor: "#2F2F2F" }}
    >
      <div className="grid">
        <header className="flex justify-center">
          <p className="text-2xl font-lawi">LAWI</p>
        </header>
        <body className="grid justify-center font-body">
          {menu && <div className="font-title pt-20">{props.menu}</div>}
          <div className="flex justify-center font-title pt-5">
            {props.title}
          </div>
          <div className="mx-4 pt-12 font-body">{props.body}</div>
        </body>
      </div>
      <div className="">
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="bg-transparent hover:bg-gray-400 font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">
            Join
          </button>
        </div> */}
      </div>
      <div className="absolute bottom-56 ">
        <Nav />
      </div>
    </div>
  );
};

export default Card;
