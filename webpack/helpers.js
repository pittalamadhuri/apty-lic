var path = require('path');

const EVENT = process.env.npm_lifecycle_event || '';

var ROOT = path.resolve(__dirname, '..');

var root = path.join.bind(path, ROOT);

exports.root = root;
