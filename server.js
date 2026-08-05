const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("MyLient Backend is Running!");
});

app.post("/contact", (req, res) => {
    const { name, email, phone, service, message } = req.body;

    console.log("Contact Form Data:");
    console.log(req.body);

    res.json({
        success: true,
        message: "Message received successfully!"
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});