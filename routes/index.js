/*jshint asi: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global module: true, require: true*/
'use strict';

module.exports = function photocracyRouter (app) {

  var router = require('express').Router();
  var nonsense = require('./nonsense');
//
//  Placeholder page title
//
  router.use(function (req, res, next) {
    res.locals.pageTitle = 'Sample Express App';
    next();
  });

  app.use(nonsense);
  app.get('/', function (req, res) {
    res.render('index', {});
  });
}; // module exports
