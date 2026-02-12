import express from "express";
import cors from "cors";
import Stripe from "stripe";

const stripe = new Stripe('sk_test_51SyrIqLS6iYGsALv9hYdzZARYD63rhyG2AwkweTMPYMsyB3uIsJuKalUQlzdztgYidAeyhoDnmeMM7eFCYF7adYT00o2FvUUrw');

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const calculateOrderAmount = (items) => {
    // Use the amount sent from the frontend, or default to 1400
    if (items && items[0] && items[0].amount) {
        return items[0].amount * 100; // Convert to cents
    }
    return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
    console.log("Received payment intent request:", req.body);
    const { items } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
