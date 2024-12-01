const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 9000;
const app = express();

const Bookings = require('./models/bookings');

const uri = process.env.MONGO_DB_CONNECTION_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB Connected Successfully!!!");
}).catch((error) => {
  console.error("Error connecting MongoDB", error);
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");
app.set("views", path.resolve('./views'));
app.use(express.static(path.resolve('./assets')));
app.use(express.static(path.resolve('./scripts')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/bike', (req, res) => {
    res.render('bike');
});

app.get('/booking', (req, res) => {
    res.render('booking');
});

app.get('/booknow', (req, res) => {
    res.render('booknow');
});

app.get('/about-us', (req, res) => {
    res.render('AboutUs');
});

app.get('/buses', (req, res) => {
    res.render('buses');
});

app.get('/cabs', (req, res) => {
    res.render('cabs');
});

app.get('/contact-us', (req, res) => {
    res.render('ContactUs');
});

app.get('/hotels', (req, res) => {
    res.render('Hotels');
});

app.get('/hotels-2', (req, res) => {
    res.render('Hotels2');
});

app.get('/hotels-3', (req, res) => {
    res.render('Hotels3');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/travels', (req, res) => {
    res.render('travels');
});

app.post('/book', async (req, res) => {
    const { bookingID, name, place, date } = req.body;
    await Bookings.create({
        bookingID,
        name,
        place,
        date
    });
    return res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port -> ${PORT}`);
    console.log(`\n\nhttp://localhost:${PORT}\n\n`);
})