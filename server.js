const exec=require('child_process').exec;
const express= require("express");
var bodyParser = require('body-parser');
const app = express();
//var xhr=new XMLHttpRequest;
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
        res.send(stdout);
    }
    //res.send(name+ ' Submitted Successfully!');
    })

});
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});






