var config = require('./webpack.config.js');

// In dev mode use the demo page as the main entry point.
config.entry.main = './src/demo.jsx';
config.debug = true;
module.exports = config;
