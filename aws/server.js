const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();

var corsOptions = {
  origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));
// parse request of content-type: application/json
app.use(express.json());
// parse request of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended:  true }));

// get local hostname
const os = require('os');
const hostName = os.hostname();

// get EC2 Instance metadata
//const host_script = exec("curl http://169.254.169.254/latest/meta-data/hostname");
//var hostName = '';
//host_script.stdout.on('data', function(data) {
//        hostName = data;
        //console.log(data);
//});

//var az_script = exec("curl http://169.254.169.254/latest/meta-data/placement/availability-zone");
//var azName = '';
//az_script.stdout.on('data', function(data) {
//        azName = data;
        //console.log(data);
//});


// default route
app.get('/', (req, res) => {
//        res.json({message: `Welcome to sample node mysql restapi - from - ${hostName} - in - ${azName}`});
        res.json({message: `Welcome to sample node mysql restapi - from - ${hostName}`});
});
// listen port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
        console.log(`Server listerning on ${PORT}`);
});
