'use strict';
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser'),
  jsonwebtoken = require("jsonwebtoken");
  //const sql = require("./api/models/db.js");
  

app.use(bodyParser.urlencoded({ extended: true })); // for parsing
app.use(bodyParser.json()); // for parsing application/json

// process.on('uncaughtException', (err, ln) => {
//   console.log(`Caught exception: ${err} ${ln}\n`);
// });
app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
    //  if (err) req.user = undefined;
    if(err) return res.json({ 'response': { 'status': 'error', 'code': 404, 'message': 'Failed to authenticate token!', 'result':{}} });
         
      req.user = decode;
      next();
      
    });
  } else {
    req.user = undefined;
    next();
  }
});


var routes = require('./api/routes/todoListRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('API server started on: ' + port);

module.exports = app;