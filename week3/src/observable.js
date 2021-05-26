"use strict";
// Source code here
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var cities = ["Varanasi", "Mathura", "Ayodhya"];
cities.map(function (c) { return "Holy " + c; })
    .forEach(function (el) { return console.log(el); });
rxjs_1.of(cities).pipe(operators_1.map(function (dataArray) { return dataArray.join(", "); })).subscribe(function (res) { return console.log(res); });
