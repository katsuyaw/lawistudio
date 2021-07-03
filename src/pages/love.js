import React from "react";
import Card from "../components/Card";
import lawiDot from "../lawiDot.png";

const Love = () => {
  return (
    <>
      <Card
        title="YOU"
        body={[
          <div className="grid justify-center">
            <img className="pt-0 h-20 w-20 sm:h-28 sm:w-28" src={lawiDot} />
          </div>,
        ]}
        button="Explore"
        bottomNav="true"
      />
    </>
  );
};

export default Love;
