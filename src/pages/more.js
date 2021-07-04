import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const more = () => {
  return (
    <>
      <Card
        menu={[
          <Link to="/studios">
            <p className="">
              <span className="font-gray hover:text-white">STUDIOS</span>
            </p>
          </Link>,
          <Link to="/team">
            <p className="">
              <span className="font-gray hover:text-white">TEAM</span>
            </p>
          </Link>,
        ]}
      />
    </>
  );
};

export default more;
