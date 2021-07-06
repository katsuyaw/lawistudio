import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const comingsoon = () => {
  return (
    <>
      <Card
        title=""
        body={[
          <div>
            <p>Coming Soon</p>
          </div>,
        ]}
        button={<Link to="/">Home</Link>}
      />
    </>
  );
};

export default comingsoon;
