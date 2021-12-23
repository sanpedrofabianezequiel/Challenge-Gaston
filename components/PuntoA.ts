export function PuntoA(arrayName: string []):boolean {
    let result :boolean = true;
    for (const iterator of arrayName) {
        if(iterator[0] !== iterator[0].toUpperCase()){
            result = false;
            break;
        }
    }
    return result;
}
