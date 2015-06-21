/*global require, process */
'use strict';

//
// App Creation and Environment Setup
//
var express = require('express');
var app = require('./lib/app/setup')(express());
// set to the root of the project

var sampleAppRouter = require('./routes');
app = sampleAppRouter(app);

//
//  Start Listening on the Port
//

app.listen(app.get('port'), function() {
  process.stdout.write('App is running the ' + (process.env.NODE_ENV || 'development') + ' environment on port ' + app.get('port') + '\n');
});

