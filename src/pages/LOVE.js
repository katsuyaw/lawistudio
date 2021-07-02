import React from "react";
import Background from "../bgb.jpg";

const Lo = () => {
  return (
    <div
      className="grid justify-items-center h-screen bg-cover"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div
        className="box-content h-80 w-80 p-12 border border-gray-50 mt-40 bg-black text-white "
        style={{ borderColor: "#2F2F2F" }}
      >
        <div className="grid ">
          <header className="justify-self-center text-2xl font-lawi">
            LAWI
          </header>
          <body className="mt-20 ml-28 font-body">
            <p className="">
              L<span className="font-gray">OVE</span>
            </p>
            <p>
              A<span className="font-gray">WARENESS</span>
            </p>
            <p>
              W<span className="font-gray">ISDOM</span>
            </p>
            <p>
              I<span className="font-gray">NTUITION</span>
            </p>
          </body>
        </div>
      </div>
    </div>
  );
};

export default Home;
