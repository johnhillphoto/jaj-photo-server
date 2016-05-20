var express = require('express');
// var Promise = require('bluebird');
var path = require('path');

var app = express();

app.use('/browser', express.static(path.join(__dirname, '../browser')));

module.exports = app;


// app.use('/vendor', express.static(path.join(__dirname, '../node_modules')));
// app.use('/browser', express.static(path.join(__dirname, '../browser')));
// app.use('/api/employees', require('./routes/api/employeesAPI.js'));
// app.use('/api/products', require('./routes/api/productsAPI.js'));

app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname, '../browser/views/', 'index.html'));
});

//error handling
app.use(function(err, req, res, next){
  console.log(err);
  res.status(err.status || 500);
});
