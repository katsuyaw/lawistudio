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
              Here is your invitation to train with us. We bring basketball to
              the beach to learn from the greatest teacher on Earth, the ocean.
              Our holistic development process delivers an invincible mind-body
              connection and a 40% clip from 3.
            </p>
            <p>This is basketball alchemy.</p>
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
