export function PuntoE(name:string):boolean{
    let result : boolean= true;
    if(name.indexOf('.') || name.length <= 1){
        result = false;
    }
    return result;
}