import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import artwork1 from "../img/artworks/artwork1.jpg";
import artwork2 from "../img/artworks/artwork2.jpg";
import artwork3 from "../img/artworks/artwork3.jpg";
import artwork4 from "../img/artworks/artwork4.jpg";
import artwork5 from "../img/artworks/artwork5.jpg";
import artwork6 from "../img/artworks/artwork6.jpg";
import artwork7 from "../img/artworks/artwork7.jpg";
import artwork8 from "../img/artworks/artwork8.jpg";
import artwork9 from "../img/artworks/artwork9.jpg";
import artwork10 from "../img/artworks/artwork10.jpg";
import artwork11 from "../img/artworks/artwork11.jpg";
import artwork12 from "../img/artworks/artwork12.jpg";
import artwork13 from "../img/artworks/artwork13.jpg";
import artwork14 from "../img/artworks/artwork14.jpg";
import artwork15 from "../img/artworks/artwork15.jpg";
import artwork16 from "../img/artworks/artwork16.jpg";
import artwork17 from "../img/artworks/artwork17.jpg";
import artwork18 from "../img/artworks/artwork18.jpg";
import artwork19 from "../img/artworks/artwork19.jpg";
import artwork20 from "../img/artworks/artwork20.jpg";

const gallery = (props) => {
  return (
    <>
      <div className="p-3 h-auto w-screen bg-black sm:p-5">
        <div className="h-auto w-full">
          <Link
            to="/"
            className=" text-white text-center text-sm  py-2 text-gray-500"
          >
            HOME
          </Link>
          <h1 className="text-white text-center sm:text-2xl font-bold py-10">
            GALLERY
          </h1>
          <div className="flex justify-center"></div>
          <p className="text-white sm:text-4xl sm:font-normal my-10 px-5">
            Persona
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Zoom>
              <img src={artwork1} />
            </Zoom>
            <Zoom>
              <img src={artwork2} />
            </Zoom>
          </div>
          <p className="text-white sm:text-4xl text-right sm:font-normal my-10 px-5">
            Concepts
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Zoom>
              <img src={artwork3} />
            </Zoom>
            <Zoom>
              <img src={artwork4} />
            </Zoom>
            <Zoom>
              <img src={artwork5} />
            </Zoom>
            <Zoom>
              <img src={artwork6} />
            </Zoom>
            <Zoom>
              <img src={artwork7} />
            </Zoom>
            <Zoom>
              <img src={artwork8} />
            </Zoom>
            <Zoom>
              <img src={artwork9} />
            </Zoom>
            <Zoom>
              <img src={artwork9} />
            </Zoom>
            <Zoom>
              <img src={artwork9} />
            </Zoom>
            <Zoom>
              <img src={artwork9} />
            </Zoom>
            <Zoom>
              <img src={artwork9} />
            </Zoom>
            <Zoom>
              <img src={artwork10} />
            </Zoom>
            <Zoom>
              <img src={artwork11} />
            </Zoom>
            <Zoom>
              <img src={artwork12} />
            </Zoom>
            <Zoom>
              <img src={artwork13} />
            </Zoom>
            <Zoom>
              <img src={artwork14} />
            </Zoom>
            <Zoom>
              <img src={artwork15} />
            </Zoom>
            <Zoom>
              <img src={artwork16} />
            </Zoom>
            <Zoom>
              <img src={artwork17} />
            </Zoom>
            <Zoom>
              <img src={artwork18} />
            </Zoom>
            <Zoom>
              <img src={artwork19} />
            </Zoom>
            <Zoom>
              <img src={artwork20} />
            </Zoom>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <Link
            to="/"
            className="text-white text-center text-sm  py-5 text-gray-500"
          >
            HOME
          </Link>
        </div>
      </div>
    </>
  );
};

export default gallery;
