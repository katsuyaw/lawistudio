import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const more = props.more;
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
      {more && (
        <NavLink
          to="/more"
          activeStyle={{ color: "white" }}
          className="w-auto h-4"
        >
          <p className="text-base leading-3 sm:leading-5">+</p>
        </NavLink>
      )}
    </>
  );
};

export default Nav;
