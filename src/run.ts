import { exec } from 'child_process';

function generateLicence(){
exec("node index.js -a Madhuri -c Application -u http://111.93.27.187:8889/ -v '2017-12-31' -k development.pem",(err,stdout,stderr)=>{
    if(err){
        console.log('Error');
    }
    else
    console.log('No Error');
})
}
