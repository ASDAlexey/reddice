import express from 'express';
import path from 'path';

const app = express();

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen('3000', () => console.log('Runnng on localhost:3000'));