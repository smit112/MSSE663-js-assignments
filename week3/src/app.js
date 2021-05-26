"use strict";
exports.__esModule = true;
exports.Max = void 0;
var Max = /** @class */ (function () {
    function Max(name, age, type, job) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.job = job;
        this.name = name;
        this.age = age;
        this.type = type;
        this.job = job;
    }
    Max.prototype.getJob = function () {
        return this.name;
    };
    Max.prototype.getAge = function () {
        return this.age;
    };
    Max.prototype.getJobStatus = function () {
        if (this.job == '') {
            return false;
        }
        return false;
    };
    return Max;
}());
exports.Max = Max;
