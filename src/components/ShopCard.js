import React from "react";
import { Link } from "react-router-dom";

const ShopCard = (props) => {
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

        <body>
          <div className="mt-0 font-body h-full text-sm sm:text-base sm:mt-7">
            {props.body}
          </div>
        </body>
      </div>
    </div>
  );
};

export default ShopCard;
