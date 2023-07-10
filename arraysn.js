//Crear una matriz de 5 filas y n columnas (se pide al usuario). Rellenarlo con números aleatorios entre 0 y 10.

let multiarray= [[], [], [], [], []];
let numeroColumnas= prompt("Ingrese el numero de columnas");
 for (let i= 0; i< multiarray.length; i++) {
    for (let j= 0; j < numeroColumnas; j++){
        let numerosAleatorios= Math.floor(Math.random() * 10);
        multiarray[i].push(numerosAleatorios);
    }
 }
console.log(multiarray);
