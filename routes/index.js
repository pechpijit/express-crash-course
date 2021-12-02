const express = require("express");
const restaurants = require("../data");

const route = express.Router();

let currentRestaurantsId = restaurants.length;

route.get("/", (req, res) => {
  res.render("index", {
    restaurants,
  });
});

module.exports = route;
