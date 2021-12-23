"use strict";
exports.__esModule = true;
var PuntoA_1 = require("./components/PuntoA");
var PuntoB_1 = require("./components/PuntoB");
var PuntoC_1 = require("./components/PuntoC");
var PuntoD_1 = require("./components/PuntoD");
var PuntoE_1 = require("./components/PuntoE");
function ValidateName(names) {
    if (!names)
        return 'No hay nombre';
    var arrayNames = names.split(" ");
    var size = arrayNames.length - 1;
    (0, PuntoC_1.PuntoC)(arrayNames);
    (0, PuntoA_1.PuntoA)(arrayNames);
    (0, PuntoB_1.PuntoB)(arrayNames);
    (0, PuntoD_1.PuntoD)(arrayNames, size);
    (0, PuntoE_1.PuntoE)(arrayNames[size]);
}
ValidateName('Gaston S. Pedro');
