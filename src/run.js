"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
function generateLicence() {
    child_process_1.exec("node index.js -a Madhuri -c Application -u http://111.93.27.187:8889/ -v '2017-12-31' -k development.pem", function (err, stdout, stderr) {
        if (err) {
            console.log('Error');
        }
        else
            console.log('No Error');
    });
}
