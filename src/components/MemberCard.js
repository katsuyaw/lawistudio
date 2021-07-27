import React from "react";
import { Link } from "react-router-dom";

const MemberCard = (props) => {
  const menu = props.menu;
  const title = props.title;
  const button = props.button;

  return (
    <div
      className="relative box-content h-80 w-80 mx-1 mt-48 border border-gray-50  bg-black text-white sm:h-96 sm:w-96"
      style={{ borderColor: "#2F2F2F" }}
    >
      <div className="grid justify-center mx-10">
        <Link to="/">
          <div
            className="text-3xl pt-6 text-center font-lawi sm:text-4xl"
            onClick={props.onClick}
          >
            LAWI
          </div>
        </Link>

        <div className="" key="body">
          {menu && (
            <div className="flex h-full mt-14 sm:mt-20">
              <div className="text-sm sm:text-base text-start font-menu ">
                {props.menu}
              </div>
            </div>
          )}
          {title && (
            <div className="mt-3 text-center font-title">{props.title}</div>
          )}
          <div className="my-3 font-body text-center text-sm sm:text-base sm:mt-10">
            {props.text}
          </div>
        </div>
      </div>
      {button && (
        <div
          className="absolute bottom-12 w-full flex justify-center"
          key="button"
        >
          <button className="bg-transparent hover:bg-white font-semibold hover:text-black py-1 px-3 sm:py-1 sm:px-5 sm:text-sm border  hover:border-transparent rounded-sm text-xs">
            {props.button}
          </button>
        </div>
      )}
    </div>
  );
};

export default MemberCard;
