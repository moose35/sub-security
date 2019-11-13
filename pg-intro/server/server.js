const pg = require('pg');
const express = require('express');
const PORT = 5000;
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

console.log('pg');

const config = {
    host: 'localhost',
    port: '5432',
    database: 'music_collection',
    max: 10,
    idleTimeoutMillis: 30000, //time until we give up our request. 30000 is 30 secs
};

const pool = pg.Pool(config);

pool.on('error', (error) => {
    console.log('Error with postgres pool', error)
});


app.get('/songs', (req, res) => {
    pool.query(`SELECT * FROM "songs";`)
        .then((result) => {
            res.send(result.rows)
            console.log(result.rows);
        })
        .catch((error) => {
            console.log('Error making SELECT query', error);
            res.sendStatus(500);
        });
        });


    app.post('/song', (req, res) => {
        pool.query(`INSERT INTO "songs"(
            "rank",
            "artist",
            "track",
            "published")
        VALUES($1, $2, $3, $4);`, [req.body.rank, req.body.artist, req.body.track, req.body.published])
            .then(() => {

                res.sendStatus(200);
            })
            .catch((error) => {
                console.log('Error making INSERT query', error);
                res.sendStatus(500);
            });
        });

        app.delete('/song/:taco', (req, res) => {
            const queryText = `DELETE FROM "songs"
            WHERE "id"=$1;`;
            pool.query(queryText, [req.params.taco])
                .then(() => {
    
                    res.sendStatus(200);
                })
                .catch((error) => {
                    console.log('Error making DELETE query', error);
                    res.sendStatus(500);
                });
            });

            // /song/7


        app.listen(PORT, () => {
            console.log('Running on port', PORT);
        });


        //const queryText = DELETE FROM "songs"
              //  WHERE "artist" ILIKE 'YYY%';`
        //would be inputted like pool.query(queryText)