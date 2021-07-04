import React from "react";
import Card from "../components/Card";

const support = () => {
  return (
    <>
      <Card
        title=""
        body="A SURF CLUB IN LIBERIA"
        button="Coming Soon"
        moreNav="true"
        button={
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.gofundme.com/f/liberiasurfclub"
          >
            Build with us
          </a>
        }
      />
    </>
  );
};

export default support;
