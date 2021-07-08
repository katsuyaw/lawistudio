import React from "react";
import Card from "../components/Card";

const contact = () => {
  return (
    <>
      <Card
        title=""
        body={[<p>Hi</p>]}
        button={<a href="mailto:info@lawistudios.com">Collaborate</a>}
        moreNav="true"
      />
    </>
  );
};

export default contact;
