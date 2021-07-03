import React from "react";
import Background from "../bgb.jpg";
import Lawi from "../lawi.png";
import Lawi2 from "../lawi.jpg";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { cacheNames } from "workbox-core/_private";

const home = () => {
  return (
    <>
      <Card
        menu={[
          <Link to="/love">
            <p>
              L<span className="font-gray">OVE</span>
            </p>
          </Link>,
          <Link to="/awareness">
            <p>
              A<span className="font-gray">WARENESS</span>
            </p>
          </Link>,
          <Link to="/wisdom">
            <p>
              W<span className="font-gray">ISDOM</span>
            </p>
          </Link>,
          <Link to="/intuition">
            <p>
              I<span className="font-gray">NTUITION</span>
            </p>
          </Link>,
        ]}
      />
    </>
  );
};

export default home;
