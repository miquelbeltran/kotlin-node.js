(function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main$lambda(req, res) {
    res.type('text/plain');
    return res.send('i am a beautiful butterfly');
  }
  function main$lambda_0() {
    println('Listening on port 3000');
  }
  function main(args) {
    println('Hello JavaScript!');
    var express = require('express');
    var app = express();
    app.get('/', main$lambda);
    app.listen(3000, main$lambda_0);
  }
  _.main_kand9s$ = main;
  Kotlin.defineModule('index', _);
  main([]);
  return _;
}(module.exports, require('kotlin')));
