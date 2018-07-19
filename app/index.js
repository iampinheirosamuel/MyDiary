// calls modules
const express = require('express');
const app = express();          
const bodyParser = require('body-parser');
// configure app to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parses json
const port = process.env.PORT || 8080; // set port

// Routes for API
const router = express.Router();

// middleware to use for all requests
router.use((req, res, next) => { next(); });

// Set Up Routes

// Register Routes
app.use('/api/v1', router);

// Start the Server
app.listen(port);
console.log(`server started at: ${port}`);
