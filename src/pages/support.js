import React from "react";
import Card from "../components/Card";

const support = (props) => {
  return (
    <>
      <Card
        onClick={props.onClick}
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
        nav={props.nav}
      />
    </>
  );
};

export default support;
