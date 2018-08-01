/**
 * match-match-game
 */
import opn from 'opn';
import express from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import SC from '../configs/server-conf';
import paths from '../configs/paths';
import freePort from './free-port'; //helper function to find unused port
import config from '../webpack.config';

const compiler = webpack(config);
const app = express();

// Wrap for the 'app.listen' which takes unused port from 'freePort'
const listen = (port) =>
    app.listen(port, err => {
        if (err) {
            console.log(err);
            return;
        }
        const url = `${SC.protocol}${SC.host}:${port}`;
        opn(url);
        console.log(`Listening at ${url}`);
    });

app.use(devMiddleware(compiler, {
    stats: 'minimal',
    publicPath: paths.publicPath,
}));

app.use(hotMiddleware(compiler, {
    path: '/__webpack_hmr',
}));

app.get('*', (req, res) => {
    res.sendFile(paths.htmlDevPath);
});

freePort(SC.port).then(listen, err => console.log(err));
