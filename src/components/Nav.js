import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const showNav = props.showNav;
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

      <button
        className="text-base leading-3 sm:leading-4"
        onClick={props.onClick}
      >
        +
      </button>
    </>
  );
};

export default Nav;
