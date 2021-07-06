import React, { useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import WhiteBackground from "../img/bgw.png";

const works = (props) => {
  return (
    <>
      <Card
        title=""
        body="Behind the scene"
        moreNav="true"
        button={<Link to="/comingsoon">Take a look</Link>}
      />
    </>
  );
};

export default works;
