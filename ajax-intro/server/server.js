console.log('hello ajax');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended: true})); //must have this line for body-parser

let quotesData = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

app.use(express.static('server/public'));

app.get('/quotes', (req, res) => 
res.send(quotesData));

app.post('/new-quote', (req, res) => {
    console.log(req.body); //this is an object?
    quotesData.push(req.body);
    res.sendStatus(200);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
