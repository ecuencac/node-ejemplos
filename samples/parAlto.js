let numeros = [3, 9, 91, 92, 93, 23, 45, 56, 1, 39];

function numero(number){
    let pares=[];
    for (const x of number){
        if (x%2===0 && typeof x=== 'number'){
            pares.push(x);
        }
    }
    return pares;
}

let ord2=numero(numeros).sort((a, b) => b-a);

console.log(ord2[0]);