import React from "react";
import Card from "../components/Card";

const awareness = (props) => {
  return (
    <>
      <Card
        onClick={props.onClick}
        text={[
          <p>
            This is the part where we defy self-limiting societal norms and
            advocate for environmental justice and social equality.
          </p>,
          ,
          <br />,
          <p>Here is our message of peace.</p>,
        ]}
        button={
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://lawistudios.org/"
          >
            Stand with us
          </a>
        }
        nav={props.nav}
      />
    </>
  );
};

export default awareness;
