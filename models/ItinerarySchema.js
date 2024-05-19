const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  user: String,
  destination: String,
  dates: {
    start: Date,
    end: Date
  },
  accommodations: [{
    name: String,
    address: String,
    checkIn: Date,
    checkOut: Date
  }],
  activities: [{
    name: String,
    date: Date,
    time: String
  }],
  expenses: [{
    description: String,
    amount: Number,
    currency: String
  }]
});

module.exports = mongoose.model('Itinerary', itinerarySchema, 'weather_details');
