export function PuntoC(arrayNames:string[]):boolean{
    if(arrayNames.length <= 1 || arrayNames.length > 3){
      return false;  
    } 
    return true;
}