const express = require("express");
const route = express.Router();

const restaurants = require("../data");
let currentRestaurantsId = restaurants.length;

route.get("/", (req, res) => {
  res.json(restaurants);
});

route.get("/:id", (req, res) => {
  const restaurantId = Number.parseInt(req.params.id, 10);
  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  );
  res.json(restaurant);
});

route.post("/", (req, res) => {
  currentRestaurantsId += 1;
  const newRestaurants = {
    id: currentRestaurantsId,
    ...req.body,
  };
  restaurants.push(newRestaurants);
  res.json(newRestaurants);
});

route.put("/:id", (req, res) => {
  const restaurantId = Number.parseInt(req.params.id, 10);
  const restaurantIndex = restaurants.findIndex(
    (restaurant) => restaurant.id === restaurantId
  );

  const updatedRestaurant = {
    id: restaurantId,
    ...req.body,
  };

  restaurants[restaurantIndex] = updatedRestaurant;
  res.send(updatedRestaurant);
});

route.delete("/:id", (req, res) => {
  const restaurantId = Number.parseInt(req.params.id, 10);
  const restaurantIndex = restaurants.findIndex(
    (restaurant) => restaurant.id === restaurantId
  );
  restaurants.splice(restaurantIndex, 1);

  res.sendStatus(204);
});

module.exports = route;
