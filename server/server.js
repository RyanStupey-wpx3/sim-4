const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

massive(process.env.DB_CONNECTION_STRING)
.then(dbInstance => app.set('db', dbInstance));

const port = 3535;

const songs = []

app.post('/api/song', (req, res) => {
    console.log('req.body', req.body)
    let {song, artist, album} = req.body

    const dbInstance = req.app.get('db')

    dbInstance.create_song([song, artist, album])
    .then(song => res.status(200).send(song))
    .catch(err => {console.log('err', err)})
});

app.get('/api/songs', (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_songs()
    .then((songs) => { res.status(200).json(songs)})
    .catch((err) => {console.log('err', err)})
})


app.listen(port, () => {console.log(`app is listening on port port`)})