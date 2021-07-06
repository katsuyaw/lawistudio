import React, { useState, useEffect } from "react";
import Book from "../img/book.jpg";
import { Link } from "react-router-dom";

const ProductDisplay = () => (
  <section className="grid text-xs ">
    <div className="">
      <div className="flex justify-center">
        <img
          className="mt-3 h-32 w-32 sm:h-36 sm:w-36 sm:mt-0 flex"
          src={Book}
          alt="THE LAW OF INTUITION"
        />
      </div>

      <div>
        <h3 className="mt-3 text-center">THE LAW OF INTUITION</h3>
        <h5 className="mt-2 text-center text-xs"></h5>
      </div>
    </div>
    <div
      // action="/create-checkout-session"
      // method="POST"
      className="mt-3 grid justify-center sm:mt-7"
    >
      <Link
        // type="submit"
        to="/wisdom"
        className="bg-transparent hover:bg-white font-semibold hover:text-black py-1 px-4 sm:py-2 sm:px-8 sm:text-sm border  hover:border-transparent rounded-sm text-xs"
      >
        Coming Soon
      </Link>
    </div>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Payment() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
