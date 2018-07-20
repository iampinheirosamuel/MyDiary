'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// calls modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// configure app to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parses json
var port = process.env.PORT || 8080; // set port

// Routes for API
var router = express.Router();

// middleware to use for all requests
router.use(function (req, res, next) {
    next();
});

// Set Up Routes
// create an entry for MyDiary
var entries = new Set([]);
router.route('/entries').post(function (req, res) {
    var today = new Date();
    var entry = {};
    if (typeof req.body.name === 'string' && typeof req.body.content === 'string') {
        entry.name = req.body.name;
        entry.content = req.body.content;
        entry.created_at = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        entries.add(entry);
        res.status(201).json({
            entries: 'Entry added successfully'
        });
    } else {
        return res.status(400).send({
            Response: 'Bad Request'
        }); // 400 Bad Request
    }
});

// get all entries for MyDiary
router.route('/entries').get(function (req, res) {
    if (entries.size !== 0) {
        return res.status(200).json([].concat(_toConsumableArray(entries)));
    }
    return res.status(400).send({
        Response: 'Bad Request'
    });
});

// get an entry from MyDiary
router.route('/entries/:entry_id').get(function (req, res) {
    if ([].concat(_toConsumableArray(entries))[req.params.entry_id]) {
        return res.status(200).json({
            entry: [].concat(_toConsumableArray(entries))[req.params.entry_id]
        });
    }
    res.status(404).json({
        Response: 'Not found'
    });
});

// modify an entry from MyDiary
router.route('/entries/:entry_id').put(function (req, res) {
    var editEntry = [].concat(_toConsumableArray(entries))[req.params.entry_id];
    editEntry.name = req.body.name;
    editEntry.content = req.body.content;
    res.json({
        entry: editEntry
    });
});

// Register Routes
app.use('/api/v1', router);

// Start the Server
app.listen(port);
console.log('server started at: ' + port);