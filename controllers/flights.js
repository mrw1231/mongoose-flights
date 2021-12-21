const Flight = require("../models/flight");

module.exports = {
    new: newFlight,
    create,
    index,
    show,
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: "All Flights", flights});
}

function newFlight(req, res) {
    res.render('flights/new', { title: "Add New Flight" });
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('flights/show', { title: 'Flight Detail', flight });
    });
}