const Flight = require("../models/flight");

module.exports = {
    new: newMovie,
    create,
};

function newMovie(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights/new');
    });
}