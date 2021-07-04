import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <NavLink to="/love" activeStyle={{ color: "white" }}>
        LOVE
      </NavLink>
      <NavLink to="/awareness" activeStyle={{ color: "white" }}>
        AWARENESS
      </NavLink>
      <NavLink to="/wisdom" activeStyle={{ color: "white" }}>
        WISDOM
      </NavLink>
      <NavLink to="/intuition" activeStyle={{ color: "white" }}>
        INTUITION
      </NavLink>
      <NavLink
        to="/more"
        activeStyle={{ color: "white" }}
        className="w-2 h-auto"
      >
        <p className="text-base leading-5">+</p>
      </NavLink>
    </>
  );
};

export default Nav;
