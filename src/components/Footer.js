import React from "react";
import { Link } from "react-router-dom";

export const Footer = (props) => {
  return (
    <>
      <div className="relative w-screen">
        <div className="absolute bottom-1 right-5">
          <div className="flex flex-row gap-2 text-gray-500 text-xs ">
            <Link to="/privacy">privacy</Link>
            <Link to="/terms">terms</Link>
            <Link to="/credit">credit</Link>
          </div>
        </div>
      </div>
    </>
  );
};
