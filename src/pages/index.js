import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { cacheNames } from "workbox-core/_private";

const home = () => {
  return (
    <>
      <Card
        menu={[
          <Link to="/love">
            <p className="">
              L<span className="font-gray hover:text-white">OVE</span>
            </p>
          </Link>,
          <Link to="/awareness">
            <p>
              A<span className="font-gray hover:text-white">WARENESS</span>
            </p>
          </Link>,
          <Link to="/wisdom">
            <p>
              W<span className="font-gray hover:text-white">ISDOM</span>
            </p>
          </Link>,
          <Link to="/intuition">
            <p>
              I<span className="font-gray hover:text-white">NTUITION</span>
            </p>
          </Link>,
        ]}
      />
    </>
  );
};

export default home;
