import React from "react";
import Card from "../components/Card";

const love = (props) => {
  return (
    <>
      <Card
        key="love"
        onClick={props.onClick}
        text={
          <div>
            <p>LAWI rebels surfing to the rhythm of purpose.</p>
            <br />
            <p></p>
            <br />
            <p>Book coming soon.</p>
          </div>
        }
        button={<div>A Rebel’s Cause</div>}
        nav={props.nav}
      />
    </>
  );
};

export default love;
