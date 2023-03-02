// Require the Mongoose package and assign it to a variable.
const mongoose = require('mongoose');

// Connect to the local MongoDB database server and specify the name of the database to use.
mongoose.connect('mongodb://localhost:27017/userThoughtDB', {
  
  // Set the useNewUrlParser option to true to enable the new URL parser.
  useNewUrlParser: true,
  
  // Set the useUnifiedTopology option to true to enable the new Server Discovery and Monitoring engine.
  useUnifiedTopology: true,
})

// Export the Mongoose connection object to make it available to other modules.
module.exports = mongoose.connection;