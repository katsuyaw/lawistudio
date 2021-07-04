import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const more = () => {
  return (
    <>
      <Card
        body="Designed with love in Los Angeles and sustainably produced for
            Mother Earth. A portion of all proceeds goes towards inspiring hoop
            dreams and protecting our ocean."
        button="Coming Soon"
        moreNav="true"
      />
    </>
  );
};

export default more;
