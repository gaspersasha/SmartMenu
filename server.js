var express = require('express');

var app = express();

app.use(express.static('public'));
app.listen(3000, function () {
    console.log('Server works!');
});

app.get('/', function(req, res){
    res.sendfile('index.html', { root: __dirname + "/public/" } );
});
