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
            <p>
              LAWI is a community of hoopers surfing life to the rhythm of
              purpose.
            </p>
            <br />
            <p></p>
            <br />
            <p>We are the rebel heart.</p>
          </div>
        }
        button={<div>Coming Soon</div>}
        nav={props.nav}
      />
    </>
  );
};

export default love;
