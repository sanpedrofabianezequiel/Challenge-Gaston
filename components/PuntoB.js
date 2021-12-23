"use strict";
exports.__esModule = true;
exports.hasDot = void 0;
function hasDot(arrayName) {
    var result = false;
    var size = arrayName.length - 1;
    for (var _i = 0, arrayName_1 = arrayName; _i < arrayName_1.length; _i++) {
        var iterator = arrayName_1[_i];
        if (iterator.length === 2 && iterator[1] === '.') {
            result = true;
            break;
        }
    }
    return result;
}
exports.hasDot = hasDot;
