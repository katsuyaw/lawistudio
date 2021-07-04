const stripe = require("stripe")(
  "sk_test_51IsWZVDgTu2BghWcrYI9oLmdl1ZW6RvxicZ1jWsC18TkPcc29af8xFtUL7WfXZdBGa6mkQsUmRz8nhY9qPtjx5fX008pkC8Odr"
);
const express = require("express");
const app = express();
app.use(express.static("."));

const YOUR_DOMAIN = "http://localhost:3000/checkout";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Stubborn Attachments",
            images: ["https://i.imgur.com/EHyR2nP.png"],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Running on port 4242"));
