const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");

const restaurantsRoute = require("./routes/restaurants");
const indexRoute = require("./routes");
const logger = require("./middleware/logger");

const app = express();

// Template engines
app.engine("hbs", engine({ extname: "hbs" }));
app.set("view engine", "hbs");

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Custom middleware
app.use(logger);

// Route
app.use("/api/restaurants", restaurantsRoute);
app.use("/", indexRoute);

app.listen(3000, () => {
  console.log("Litening to port 3000");
});
