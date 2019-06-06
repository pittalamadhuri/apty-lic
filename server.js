const exec=require('child_process').exec;
const express= require("express");
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.sendFile('D:/MyCodes/licence-cli/input.html');
});
app.post('/input', function (req, res) {
    var name = req.body.application + ' ' + req.body.customer;
    exec("node index.js -a Madhuriiiiiiiiiiiiiiiiii -c Application -u http://111.93.27.187:8889/ -v '2017-12-31' -k development.pem",(err,stdout,stderr)=>{
        if(err){
            res.send('Error');
        }
        else
        res.send('No Error');
    //res.send(name+ ' Submitted Successfully!');
    

})

});
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});