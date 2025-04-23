// El fichero _3-nickname-generator.js_ contiene la implementación de un ejercicio que realizó nuestra ex compañera [Denisse](https://github.com/Denissevar)
// Usa adecuadamente la función que contiene para crear un script en NodeJS que permita pasar un string a la función y muestre por consola el resultado. NO TOQUES el cuerpo de la función

// ```
// node 3-nickname-generator.js Robert # Debería mostrar por consola "Rob"
// node 3-nickname-generator.js Douglas # Debería mostrar por consola "Doug"
// node 3-nickname-generator.js Emma # Debería mostrar por consola "Emma"
// node 3-nickname-generator.js Ian # Debería mostrar por consola "Error: Name too short"
// ```




// URL problema: https://www.codewars.com/kata/593b1909e68ff627c9000186

function nicknameGenerator(name){
    /** Por favor, no uses estructuras o herramientas que no hemos visto en clase  */

    /** Comprobar si el nickname tiene menos de 4 letras */

    if (name.length < 4) {
        return "Error: Name too short";
    }

    //* obtener la tercera letra del nombre*//

    const terceraletra = name[2];

    //*cuales son vocales*//

    const vocales = ["a", "e","i", "o", "u"];

    //* si la tercera letra es vocal, devover las primeras 4 letras*//

    if (vocales.includes(terceraletra.toLowerCase())){
        return name.slice(0, 4);
    }

//* si la tercera letra no es vocal, devolver las 3 primeras letras*//

return name.slice(0, 3);
}


console.log(nicknameGenerator(process.argv[2]))