var express  = require('express'),
    app      = express(),
    server   = require('http').createServer(app);

    // Custom modules


// all environments
app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.use(express.static(__dirname + '/public'));         // set the static files location /public/img will be /img for users
  app.use(express.logger('dev'));                         // log every request to the console
  app.use(express.bodyParser());                          // pull information from html in POST
  app.use(express.methodOverride());                      // simulate DELETE and PUT
});

// routes
require('./app/routes')(app);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// listen
// ------------------------------------------------------------
server.listen(app.get('port'), function(){
  console.log('Getting jiggy on port: ' + app.get('port'));
});
// ------------------------------------------------------------

// app.listen(app.get('port'));
// console.log('Gettin jiggy on port: ' + app.get('port'));
exports = module.exports = app;
