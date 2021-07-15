import React from "react";
import Card from "../components/Card";

const support = () => {
  return (
    <>
      <Card
        title=""
        text={
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.gofundme.com/f/liberiasurfclub"
            className="underline"
          >
            A Surf Club In Liberia
          </a>
        }
        moreNav="true"
      />
    </>
  );
};

export default support;
