/**
 * match-match-game
*/
const path = require('path');

const srcPath = path.join(__dirname, '../src');
const n_mPath = path.join(__dirname, '../node_modules');
const indexJsPath = path.join(srcPath, '/index.js');
const prodPath = path.join(__dirname, '../memory.io');
const publicPath = '/';
const htmlProdPath = path.join(prodPath, 'index.html');
const htmlDevPath = path.join(__dirname, '../src/index.html');
const templeHtml = path.join(__dirname, '../src/index.html');


module.exports = {
    indexJsPath,
    prodPath,
    publicPath,
    htmlProdPath,
    htmlDevPath,
    templeHtml,
    srcPath,
    n_mPath,
};

