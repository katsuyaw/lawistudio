import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const intuition = (props) => {
  return (
    <>
      <Card
        onClick={props.onClick}
        title=""
        text={[
          <p>Welcome to our studio.</p>,
          <br />,
          <p>
            Designed with TLC in Los Angeles and sustainably produced for Mother
            Earth.
          </p>,

          <p>
            A portion of all proceeds goes towards inspiring hoop dreams and
            protecting our ocean.
          </p>,
        ]}
        button="Coming Soon"
        nav={props.nav}
      />
    </>
  );
};

export default intuition;
