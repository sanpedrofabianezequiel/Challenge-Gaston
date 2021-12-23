"use strict";
exports.__esModule = true;
exports.PuntoD = void 0;
function PuntoD(arrayNames, size) {
    if (size !== 3) {
        return false;
    }
    //Si se ingresan dos nombres y un apellido, los dos primeros pueden ser iniciales, o solo el 
    //segundo. Nunca puede ser una inicial el primer nombre y no el segundo
    if (!isMatch(arrayNames[0], arrayNames[1])) {
        return false;
    }
    return true;
}
exports.PuntoD = PuntoD;
function isInitial(item) {
    if (item.length === 2 && item[1] === '.' && item[0] === item[0].toUpperCase()) {
        return true;
    }
    return false;
}
function isMatch(item, item2) {
    if (isInitial(item) && isInitial(item2)) { //os dos primeros pueden ser iniciales
        return true;
    }
    ;
    if (!isInitial(item) && isInitial(item2)) { //solo el  segundo.
        return true;
    }
    return false;
}
