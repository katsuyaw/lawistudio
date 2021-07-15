import React from "react";
import { NavLink } from "react-router-dom";

const moreNav = (props) => {
  return (
    <>
      <div
        //to="/intuition"
        activeStyle={{ color: "gray" }}
        className="w-2 h-auto"
      >
        <button
          className="text-base leading-3 sm:leading-6"
          onClick={props.onClick}
        >
          -
        </button>
      </div>

      <NavLink to="/contact" activeStyle={{ color: "white" }}>
        CONTACT
      </NavLink>

      <NavLink to="/support" activeStyle={{ color: "white" }}>
        SUPPORT
      </NavLink>

      <NavLink to="/works" activeStyle={{ color: "white" }}>
        GALLERY
      </NavLink>
      <NavLink to="/team" activeStyle={{ color: "white" }}>
        TEAM
      </NavLink>
    </>
  );
};

export default moreNav;
