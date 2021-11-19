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
            <p>Individually tailored intuition counseling.</p>
            <br />
            <p>
              Calling all athletes, artists, and activists to use the law of
              intuition for an authentic self & style.
            </p>
          </div>
        }
        // button={<a href="mailto:info@lawistudios.com">Surf with us</a>}
        button={<a href="mailto:info@lawistudios.com">Surf with us</a>}
        nav={props.nav}
      />
    </>
  );
};

export default wisdom;
