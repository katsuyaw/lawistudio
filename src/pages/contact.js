import React from "react";
import Card from "../components/Card";

const contact = (props) => {
  return (
    <>
      <Card
        onClick={props.onClick}
        title=""
        text={[<p>Hi</p>]}
        button={<a href="mailto:info@lawistudios.com">Collaborate</a>}
        nav={props.nav}
      />
    </>
  );
};

export default contact;
