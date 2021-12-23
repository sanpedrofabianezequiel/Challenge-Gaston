"use strict";
exports.__esModule = true;
var PuntoA_1 = require("./components/PuntoA");
var PuntoB_1 = require("./components/PuntoB");
var PuntoD_1 = require("./components/PuntoD");
function ValidateName(names) {
    if (!names)
        return 'No hay nombre';
    var arrayNames = names.split(" ");
    if (arrayNames.length <= 1 || arrayNames.length > 3)
        return 'c) Solo habrán 2 o 3 términos en el ingreso.';
    (0, PuntoA_1.startsWithCapital)(arrayNames);
    (0, PuntoB_1.hasDot)(arrayNames);
    (0, PuntoD_1.validateSurName)(arrayNames);
}
ValidateName('Gaston S. Pedro');
