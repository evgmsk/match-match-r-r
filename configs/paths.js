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

/*
"devDependencies": {
    "@babel/cli": "^7.2.3",
        "@babel/core": "^7.2.2",
        "@babel/node": "^7.2.2",
        "@babel/plugin-transform-runtime": "^7.2.0",
        "@babel/preset-env": "^7.3.1",
        "@babel/preset-react": "^7.0.0",
        "@babel/preset-stage-0": "^7.0.0",
        "autoprefixer": "^9.4.7",
        "babel-loader": "^8.0.5",
        "css-loader": "^0.28.11",
        "file-loader": "^1.1.6",
        "html-webpack-plugin": "^3.2.0",
        "mini-css-extract-plugin": "latest",
        "node-sass": "^4.11.0",
        "postcss-flexbugs-fixes": "^3.3.0",
        "postcss-loader": "^2.1.4",
        "redux-devtools-extension": "^2.13.5",
        "sass-loader": "^7.0.1",
        "style-loader": "^0.21.0",
        "url-loader": "^0.6.2",
        "webpack": "latest",
        "webpack-cli": "^3.2.3",
        "webpack-dev-middleware": "^3.5.2",
        "webpack-dev-server": "latest",
        "webpack-hot-middleware": "^2.24.3"
},
"dependencies": {
    "express": "latest",
        "prop-types": "^15.7.2",
        "react": "^16.8.0",
        "react-dom": "^16.8.0",
        "react-redux": "latest",
        "react-router": "latest",
        "react-router-dom": "latest",
        "redux": "latest",
        "redux-saga": "latest"
}
}*/
