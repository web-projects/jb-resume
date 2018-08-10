var express = require('express');
var app = express();

// Access static content
//app.use('/', express.static(__dirname + '/public'));
app.use(express.static('public'));

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
    console.log('Your files will be served through this web server')
});
