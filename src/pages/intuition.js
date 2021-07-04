import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const intuition = () => {
  return (
    <>
      <Card
        title=""
        body={[
          <p>
            Designed with love in Los Angeles and sustainably produced for
            Mother Earth. A portion of all proceeds goes towards inspiring hoop
            dreams and protecting our ocean.
          </p>,
        ]}
        button="Coming Soon"
        bottomNav="true"
      />
    </>
  );
};

export default intuition;
