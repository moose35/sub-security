console.log('hello there')
const express = require('express');
const destinationRouter = require('./routers/destination.router');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;



app.use(bodyParser.urlencoded({ extended: true }));

app.use('/destination', destinationRouter);

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});
