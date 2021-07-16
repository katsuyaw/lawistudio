import React from "react";
import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";

const home = (props) => {
  return (
    <>
      <HomeCard
        menu={[
          <Link to="/love" onClick={props.onClick}>
            <p className="">
              L<span className="font-gray hover:text-white">OVE</span>
            </p>
          </Link>,
          <Link to="/awareness" onClick={props.onClick}>
            <p>
              A<span className="font-gray hover:text-white">WARENESS</span>
            </p>
          </Link>,
          <Link to="/wisdom" onClick={props.onClick}>
            <p>
              W<span className="font-gray hover:text-white">ISDOM</span>
            </p>
          </Link>,
          <Link to="/intuition" onClick={props.onClick}>
            <p>
              I<span className="font-gray hover:text-white">NTUITION</span>
            </p>
          </Link>,
        ]}
        nav={true}
      />
    </>
  );
};

export default home;
