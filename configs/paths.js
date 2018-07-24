/**
 * match-match-game
*/
const path = require('path');

const indexJsPath = path.join(__dirname, '../src/index.js');
const hotPath = path.join(__dirname, '../public');
const prodPath = path.join(__dirname, '../dist');
const publicPath = '/';
const htmlProdPath = path.join(prodPath, 'index.html');
const htmlDevPath = path.join(__dirname, '../src/index.html');
const templeHtml = path.join(__dirname, '../public/index.html');
const srcPath = path.join(__dirname, '../src');
const n_mPath = path.join(__dirname, '../node_modules');

module.exports = {
    indexJsPath,
    hotPath,
    prodPath,
    publicPath,
    htmlProdPath,
    htmlDevPath,
    templeHtml,
    srcPath,
    n_mPath,
};

