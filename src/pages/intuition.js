import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const intuition = () => {
  return (
    <>
      <Card
        title=""
        body={[
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
        nav="true"
        more="true"
      />
    </>
  );
};

export default intuition;
