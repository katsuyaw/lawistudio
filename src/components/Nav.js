import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <>
      <NavLink to="/love" activeStyle={{ color: "white" }}>
        LOVE
      </NavLink>
      <NavLink
        to="/awareness"
        activeStyle={{ color: "white" }}
        className="animate-pulse"
      >
        AWARENESS
      </NavLink>
      <NavLink to="/wisdom" activeStyle={{ color: "white" }}>
        WISDOM
      </NavLink>
      <NavLink to="/intuition" activeStyle={{ color: "white" }}>
        INTUITION
      </NavLink>

      <div className="w-2 h-auto">
        <button
          className="text-base leading-3 sm:leading-6"
          onClick={props.onClick}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Nav;
