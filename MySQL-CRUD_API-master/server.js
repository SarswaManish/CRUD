const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let port=process.env.PORT || 3000;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Nupay application. );
});

require("./routes/customer.routes.js")(app);

// set port, listen for requests
app.listen(port, () => {
  console.log("Server is running on port 8080.http://localhost:${port}");
});