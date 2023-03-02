//Require the Express package and assign it to a variable.
const express = require('express');

//Require the database connection configuration from a separate file.
const db = require('./config/connection');

//Require the routes configuration from a separate file.
const routes = require('./routes');

//Set the port number for the server to listen on.
const PORT = 3001;

//Initialize an instance of the Express application.
const app = express();

//Enable parsing of URL-encoded and JSON request bodies.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use the routes configuration for handling incoming requests.
app.use(routes);

//Start the server and listen for incoming requests on the specified port.
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});