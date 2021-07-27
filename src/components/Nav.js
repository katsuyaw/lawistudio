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

      <button className="  sm:leading-1" onClick={props.onClick}>
        +
      </button>
    </>
  );
};

export default Nav;
