import React from "react";
import Card from "../components/MemberCard";

const credit = () => {
  return (
    <>
      <Card
        key="credit"
        text={
          <div className="text-gray-500 font-thin flex flex-col justify-center items-center h-36 gap-10">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://katsuya.me/"
            >
              <p>WEB DEVELOPER & UI/UX DESIGN</p>
              <p>KATSUYA WAKABAYASHI</p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://sierramergliano.com/"
            >
              <p>GRAPHIC DESIGN</p>
              <p>SIEERA MERGLIANO</p>
            </a>
          </div>
        }
      />
    </>
  );
};

export default credit;
