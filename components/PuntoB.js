"use strict";
exports.__esModule = true;
exports.PuntoB = void 0;
function PuntoB(arrayName) {
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
exports.PuntoB = PuntoB;
