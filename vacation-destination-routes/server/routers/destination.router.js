const express = require('express');
const router = express.Router();
let destinations= [];

router.get('/', (req, res) =>{
    console.log('Somewhere warm?');
    res.send(destinations);
});

router.post('/', (req, res) => {
    destinations.push(req.body);
    console.log(req.body);
});

router.delete('/', (req, res) => {
    destinations = [];
    console.log(req.body);
});

module.exports = router;

