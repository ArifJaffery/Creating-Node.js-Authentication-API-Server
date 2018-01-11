"use strict";
exports.__esModule = true;
var user_controller_1 = require("./controller/user-controller");
var main = /** @class */ (function () {
    function main() {
        console.log('API Server starting ......');
        new user_controller_1.UserController();
    }
    return main;
}());
exports.main = main;
exports["default"] = new main();
