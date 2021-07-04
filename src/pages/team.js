import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const team = () => {
  return (
    <>
      <Card
        title=""
        body={[
          <div className="flex flex-row gap-8 text-sm">
            <p>GABE HILT </p>
            <a
              href="https://instagram.com/gabehilt"
              className="text-gray-500 hover:text-white"
            >
              @gabehilt
            </a>
          </div>,
        ]}
        moreNav="true"
      />
    </>
  );
};

export default team;
