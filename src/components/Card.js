import React from "react";
import Background from "../bgb.jpg";

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
          <div className="mx-4 pt-12 font-title">{props.body}</div>
        </body>
      </div>
    </div>
  );
};

export default Card;
