import React, { useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const works = (props) => {
  return (
    <>
      <Card
        onClick={props.onClick}
        title=""
        text="Behind the scenes"
        moreNav="true"
        button={<Link to="/gallery">Peep</Link>}
        nav={props.nav}
      />
    </>
  );
};

export default works;
