import React from "react";
import Card from "../components/Card";

const contact = () => {
  return (
    <>
      <Card
        title=""
        body={[<p>Your voice matters</p>]}
        button={<a href="mailto:info@lawistudios.com">Contact us</a>}
        moreNav="true"
      />
    </>
  );
};

export default contact;
