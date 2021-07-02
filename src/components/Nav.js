import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-evenly text-gray-600">
      <div>
        <NavLink to="/love" activeStyle={{ color: "white" }}>
          LOVE
        </NavLink>
      </div>
      <div>
        <NavLink to="/awareness" activeStyle={{ color: "white" }}>
          AWARENESS
        </NavLink>
      </div>
      <div>
        <NavLink to="/wisdom" activeStyle={{ color: "white" }}>
          WISDOM
        </NavLink>
      </div>
      <div>
        <NavLink to="/intuition" activeStyle={{ color: "white" }}>
          INTUITION
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
