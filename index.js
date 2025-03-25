const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/v1/webhook", (req, res) => {
    const { body } = req;

    console.log('This is the webhook data', body);

    return res.status(200).json({ success: true, message: 'Webhook data', data: body });
})

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({ success: "true", message: "Resource fetched" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Webhook server running on port ${port}`);
});