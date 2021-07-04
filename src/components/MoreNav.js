import React from "react";
import { NavLink } from "react-router-dom";

const moreNav = () => {
  return (
    <>
      <NavLink
        to="/intuition"
        activeStyle={{ color: "gray" }}
        className="w-2 h-auto"
      >
        <p className="text-base leading-5">-</p>
      </NavLink>
      <NavLink to="/studios" activeStyle={{ color: "white" }}>
        STUDIOS
      </NavLink>
      <NavLink to="/team" activeStyle={{ color: "white" }}>
        TEAM
      </NavLink>
      <NavLink to="/support" activeStyle={{ color: "white" }}>
        SUPPORT
      </NavLink>
      <NavLink to="/contact" activeStyle={{ color: "white" }}>
        CONTACT
      </NavLink>
    </>
  );
};

export default moreNav;
