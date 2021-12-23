"use strict";
exports.__esModule = true;
exports.validateSurName = void 0;
function validateSurName(arrayName) {
    var result = true;
    if (arrayName.length === 3) {
        for (var _i = 0, arrayName_1 = arrayName; _i < arrayName_1.length; _i++) {
            var iterator = arrayName_1[_i];
            if (isValidFormat(iterator)) {
                console.log('entro');
            }
        }
    }
    return result;
}
exports.validateSurName = validateSurName;
function isValidFormat(item) {
    var result = false;
    if (item.length === 2 && item[1] === '.' && item[0] === item[0].toUpperCase()) {
        result = true;
    }
    return result;
}
