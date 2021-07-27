import React from "react";
import Card from "../components/Card";

const wisdom = (props) => {
  return (
    <>
      <Card
        key="wisdom"
        onClick={props.onClick}
        title=""
        text={
          <div>
            <p>
              Here is our street recipe for self-discovery, self-mastery, and
              self-expression:
            </p>
            <br />
            <i>The Law of Intuition.</i>
            <br />
            <br />
            <p>
              Ingredients include scientific fact, universal truths, you, and
              the ocean.
            </p>
          </div>
        }
        // button={<a href="mailto:info@lawistudios.com">Surf with us</a>}
        button={<div>Coming Soon</div>}
        nav={props.nav}
      />
    </>
  );
};

export default wisdom;
