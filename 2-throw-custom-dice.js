// Crea un script que al ejecutarlo lanza un dado de tantas caras como valor del primer parámetro del script. Se usa de la siguiente manera:

// ```
// node 2-throw-custom-dice.js        # tira un dado de 6 caras -> Debería mostrar un número entre 1 y 6 (porque no se ha especificado ningún parámetro)
// node 2-throw-custom-dice.js 20    # tira un dado de 20 caras -> Debería mostrar un número entre 1 y 20
// node 2-throw-custom-dice.js 100    # tira un dado de 100 caras -> Debería mostrar un número entre 1 y 100
// ```


let pipsDie;

(process.argv[2]) ? pipsDie = process.argv[2]:pipsDie= 6;

console.log(`Al tirar el dado de ${pipsDie} caras ha salido el ${Math.floor(Math.random() * pipsDie ) + 1}`);
