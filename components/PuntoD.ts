export function PuntoD(arrayNames:string[], size:number):boolean{
    if(size !== 3){
        return false;
    } 
    //Si se ingresan dos nombres y un apellido, los dos primeros pueden ser iniciales, o solo el 
    //segundo. Nunca puede ser una inicial el primer nombre y no el segundo
    if(!isMatch(arrayNames[0],arrayNames[1])){
        return false;
    }
    return true;
}

function isInitial(item:string):boolean{//Verifico que sean Iniciales
    if(item.length === 2 && item[1] === '.' &&  item[0] === item[0].toUpperCase()) {
        return true;
    }
    return false;
}
function isMatch(item:string,item2:string):boolean{
    if(isInitial(item) && isInitial(item2)){//os dos primeros pueden ser iniciales
        return true;
    };
    if(!isInitial(item) && isInitial(item2)){//solo el  segundo.
        return true;
    }
    return false;
}