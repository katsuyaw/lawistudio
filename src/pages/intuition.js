import React from "react";
import Card from "../components/Card";

const intuition = (props) => {
  return (
    <>
      <Card
        key="intuition"
        onClick={props.onClick}
        title=""
        text={
          <div>
            <p>Welcome to our studio.</p>
            <br />
            <p>
              Designed with TLC in Los Angeles and sustainably produced for
              Mother Earth.
            </p>

            <p>
              A portion of all proceeds goes towards inspiring hoop dreams and
              protecting our ocean.
            </p>
          </div>
        }
        button="Coming Soon"
        nav={props.nav}
      />
    </>
  );
};

export default intuition;
