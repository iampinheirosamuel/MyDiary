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
// create an entry for MyDiary
const entries = new Set([]);
router.route('/entries').post((req, res) => {
        const today = new Date();
        const entry = {};
        if (typeof req.body.name === 'string' && typeof req.body.content === 'string') {
            entry.name = req.body.name;
            entry.content = req.body.content;
            entry.created_at = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            entries.add(entry);
            res.status(201).json({
                entries: 'Entry added successfully',
            });
        } else {
            return res.status(400).send({
                Response: 'Bad Request',
            }); // 400 Bad Request
        }
    });


// Register Routes
app.use('/api/v1', router);

// Start the Server
app.listen(port);
console.log(`server started at: ${port}`);
