"use strict";
exports.__esModule = true;
exports.startsWithCapital = void 0;
function startsWithCapital(arrayName) {
    var result = true;
    for (var _i = 0, arrayName_1 = arrayName; _i < arrayName_1.length; _i++) {
        var iterator = arrayName_1[_i];
        if (iterator[0] !== iterator[0].toUpperCase()) {
            result = false;
            break;
        }
    }
    return result;
}
exports.startsWithCapital = startsWithCapital;
