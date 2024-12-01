const mongoose = require('mongoose');

const bookingsSchema = mongoose.Schema({
    bookingID: {
        type: String
    },
    name: {
        type: String
    },
    place: {
        type: String
    },
    date: {
        type: Date
    }
});

const bookings = mongoose.model("bookings", bookingsSchema);

module.exports = bookings;