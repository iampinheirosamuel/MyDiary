// calls modules
const express = require('express');
const app = express();          
const bodyParser = require('body-parser');
// configure app to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parses json
const port = process.env.PORT || 8080; // set port
// Start the Server
app.listen(port);
console.log(`server started at: ${port}`);
