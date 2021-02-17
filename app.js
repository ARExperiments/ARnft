const express = require('express')
const app = express();
var https = require( "https" );  // For creating an HTTPS server
var fs = require( "fs" ); // For getting access to the file system
const port = 3500; // port for running the app

app.use(express.static(__dirname));

// Obtain key and certificate from file system
const options = {
    key: fs.readFileSync('key.pem'), 
    cert: fs.readFileSync('cert.pem') 
}; 

app.get('/', (req, res) => {
    res.sendFile('examples/wall_duck.html', { root: __dirname });
});

// Create the server using ssl files and configured express server
var httpsServer = https.createServer(options, app); 

// Listen the target port
httpsServer.listen(port);

