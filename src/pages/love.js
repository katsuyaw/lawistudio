import React from "react";
import Card from "../components/Card";
import lawiDot from "../lawiDot.png";

const love = () => {
  return (
    <>
      <Card
        title=""
        body={[
          <div className="grid justify-center">
            <img className="pt-0 h-20 w-20 sm:h-28 sm:w-28" src={lawiDot} />
          </div>,
        ]}
        button={
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/lawistudios"
          >
            Explore
          </a>
        }
        bottomNav="true"
      />
    </>
  );
};

export default love;
