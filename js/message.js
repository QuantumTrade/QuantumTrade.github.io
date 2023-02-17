// const express = require("express");
// const app = express();

// app.use(express.json()); // parse incoming requests as JSON

// app.post("/webhook", (req, res) => {
//   const payload = req.body; // the payload information is in the request body
//   console.log(payload); // do something with the payload information
//   res.sendStatus(200); // acknowledge receipt of the payload
// });

// app.listen(3000, () => {
//   console.log("Webhook server listening on port 3000");
// });

// // Parse the TradingView webhook payload
// const payload = JSON.parse(request.body);

// // Extract the relevant information from the payload
// const symbol = payload.symbol;
// const price = payload.close;
// const direction = "";

// // Format the message
// const message = `TradingView Alert - ${symbol} price is ${direction} at $${price}`;

// // Send the message to your desired channel or service
// sendToChannel(message);
