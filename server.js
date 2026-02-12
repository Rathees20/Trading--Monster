import "dotenv/config";
import express from "express";
import cors from "cors";
import Stripe from "stripe";

const app = express();
const port = process.env.PORT || 4242;

if (!process.env.STRIPE_SECRET_KEY) {
  console.error("Missing STRIPE_SECRET_KEY environment variable.");
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-11-20.acacia",
});

app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { priceId } = req.body;

  if (!priceId) {
    return res.status(400).json({ error: "Missing priceId" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      // Configure a 3-day free trial on the subscription
      subscription_data: {
        trial_period_days: 3,
      },
      success_url:
        process.env.STRIPE_SUCCESS_URL ||
        "http://localhost:5173/thank-you?session_id={CHECKOUT_SESSION_ID}",
      cancel_url:
        process.env.STRIPE_CANCEL_URL || "http://localhost:5173/",
    });

    // Prefer using the hosted URL when available
    return res.json({ id: session.id, url: session.url });
  } catch (err) {
    console.error("Error creating Stripe Checkout Session:", err);
    return res
      .status(500)
      .json({ error: "Failed to create checkout session" });
  }
});

app.listen(port, () => {
  console.log(`Stripe server listening on port ${port}`);
});

