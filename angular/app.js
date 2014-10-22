/*jslint node: true */
'use strict';
var path = require('path');
var jade = require('jade');
var express = require('express'),
    routes = require('./routes'),
    app = express();

app.use(express.bodyParser());
app.set('views', path.join(__dirname , 'app/jade/views'));
app.set('view engine', 'jade');

app.get('/', function(req, res)
{
  res.render(path.join(__dirname, 'app/jade/index'));
})
app.get('/api/awesomeThings', routes.awesomeThings);

app.use(function (req, res) {
    res.json({'ok': false, 'status': '404'});
});
app.listen(process.env.PORT || 1111,function()
{
  console.log("server are listening on port "  + (process.env.PORT || 1111));
});
module.exports = app;
