import React from "react";
import { NavLink } from "react-router-dom";

function ParentNav(props) {
  const mainNav = props.mainNav;

  if (mainNav) {
    return (
      <div>
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
          activeStyle={{ color: "white" }}
          className="w-auto h-4"
          onClick={props.onClick}
        >
          <p className="text-base leading-3 sm:leading-5">+</p>
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          activeStyle={{ color: "gray" }}
          className="w-2 h-auto"
          onClick={props.onClick}
        >
          <p className="text-base leading-3 sm:leading-5">-</p>
        </button>

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
      </div>
    );
  }
}

export default ParentNav;
