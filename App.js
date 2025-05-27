/*
Node + Express Example code for CS160 Summer 2022
Prepared by Shm Garanganao Almeda 

Code referenced from: 
https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module"
https://expressjs.com/en/starter/hello-world.html
https://codeforgeek.com/render-html-file-expressjs/
https://stackoverflow.com/questions/32257736/app-use-express-serve-multiple-html

Photo Credits:
Bunny by Satyabratasm on Unsplash <https://unsplash.com/photos/u_kMWN-BWyU>
*/

// Node modules to *require*
const express = require('express');
const app = express();
const path = require('path');

// Specify that we want to run our website on 'http://localhost:8000/'
const host = 'localhost';
const port = 8000;

var publicPath = path.join(__dirname, 'public');  // Get the path to use our "public" folder where we store HTML, CSS, images, etc.
app.use(express.static(publicPath));  // Tell Express to use that folder

// Route to send the "Jonathan Green - Composer.html" file when the user accesses "/"
app.get("/", function (req, res) {
    res.sendFile(path.join(publicPath, "Jonathan Green - Composer.html"));
});

// Additional routes for "a.html", "b.html", and "c.html"
app.get('/a', function (req, res) {
    res.sendFile(path.join(publicPath, 'a.html'));
});
app.get('/b', function (req, res) {
    res.sendFile(path.join(publicPath, 'b.html'));
});
app.get('/c', function (req, res) {
    res.sendFile(path.join(publicPath, 'c.html'));
});

// Run this server by entering "node app.js" in your command line. 
app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});