if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin-node.js_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-node.js_main'.");
}
this['kotlin-node.js_main'] = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    println('Hello JavaScript!');
  }
  _.main_kand9s$ = main;
  Kotlin.defineModule('kotlin-node.js_main', _);
  main([]);
  return _;
}(typeof this['kotlin-node.js_main'] === 'undefined' ? {} : this['kotlin-node.js_main'], kotlin);
