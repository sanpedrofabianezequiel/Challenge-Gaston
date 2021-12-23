export function PuntoB(arrayName: string []):boolean {
    let result :boolean = false;
    let size :number = arrayName.length -1 ;
       for (const iterator of arrayName) {
    
        if( iterator.length === 2 && iterator[1] === '.' ){
            result = true;
            break;
        }
    }
    return result;
}
