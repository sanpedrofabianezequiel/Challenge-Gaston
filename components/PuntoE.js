"use strict";
exports.__esModule = true;
exports.PuntoE = void 0;
function PuntoE(name) {
    var result = true;
    if (name.indexOf('.') || name.length <= 1) {
        result = false;
    }
    return result;
}
exports.PuntoE = PuntoE;
