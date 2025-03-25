const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.post("/api/v1/webhook", (req, res) => {
    const { body } = req;

    console.log('This is the webhook data', body);

    return res.status(200).json({ success: true, message: 'Webhook data', data: body });
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})