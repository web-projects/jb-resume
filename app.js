var express = require('express');
var app = express();

// Access static content
//app.use('/', express.static(__dirname + '/public'));
app.use(express.static('./public'));

// Get port from ENV variable
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('web server started on port: ' + app.get('port'));
});
