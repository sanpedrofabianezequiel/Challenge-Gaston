import { PuntoA } from "./components/PuntoA";
import { PuntoB } from './components/PuntoB';
import { PuntoC } from "./components/PuntoC";
import { PuntoD } from "./components/PuntoD";
import { PuntoE } from "./components/PuntoE";


function ValidateName (names:string):string{
    if(!names)return 'No hay nombre';
    const arrayNames = names.split(" ");
    const size =  arrayNames.length - 1;
    PuntoC(arrayNames);
    PuntoA(arrayNames);
    PuntoB(arrayNames);
    PuntoD(arrayNames, size);
    PuntoE(arrayNames[size]);
}

ValidateName('Gaston S. Pedro');
