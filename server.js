const exec=require('child_process').exec;
const express= require("express");
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.sendFile('D:/MyCodes/licence-cli/input.html');
});
app.post('/input', function (req, res) {
    var application = req.body.application;
    exec("node index.js -a "+req.body.application+" -c "+req.body.customer+" -u "+req.body.url+" -v "+req.body.validto+" -m "+req.body.adcount+" -k development.pem",(err,stdout,stderr)=>{
        if(err){
            res.send('Error');
        }
        else{
        res.send('<!DOCTYPE html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"><script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head><body><div class="tile is-vertical is-1"><div class="tile is-parent"><article class="tile is-child notification is-primary"><div class="content"><p class="title">Licence key</p><div class="content">'+stdout+'</div></div></article></div></div></body></html>');
    }
    //res.send(name+ ' Submitted Successfully!');
    })

});
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});






