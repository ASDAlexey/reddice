import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js';

const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen('3000', () => console.log('Runnng on localhost:3000'));