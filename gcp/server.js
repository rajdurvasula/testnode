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

// get EC2 Instance metadata
const host_script = exec("curl \"http://metadata.google.internal/computeMetadata/v1/instance/name\" -H \"Metadata-Flavor: Google\"")
var hostName = '';
host_script.stdout.on('data', function(data) {
        hostName = data;
        //console.log(data);
});

var zone_script = exec("curl \"http://metadata.google.internal/computeMetadata/v1/instance/zone\" -H \"Metadata-Flavor: Google\"")
var zoneName = '';
zone_script.stdout.on('data', function(data) {
	parts = data.split('/');
        zoneName = parts[parts.length-1];
        //console.log(data);
});


// default route
app.get('/', (req, res) => {
        res.json({message: `Welcome to sample node mysql restapi - from - ${hostName} - in - ${zoneName}`});
});
// listen port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
        console.log(`Server listerning on ${PORT}`);
});
