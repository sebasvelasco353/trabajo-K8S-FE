const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Booking Service Running");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

app.get("/api/bookings", (req, res) => {
    res.json([
        {
            id: 1,
            hotel: "BookingLite Hotel",
            guest: "Camilo Mora"
        }
    ]);
});

app.listen(3000, () => {
    console.log("Booking Service running on port 3000");
});