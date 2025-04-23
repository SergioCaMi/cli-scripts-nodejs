// ¡Buen prompt!




// Necesito un script en Node.js que realice las siguientes tareas:

// Reciba un DNI como argumento de línea de comandos.
// Busque el DNI en un fichero llamado dnis_con_deuda.txt.
// Si el DNI existe en el fichero, devuelva un mensaje indicando que la persona con ese DNI tendrá que pagar en la declaración y la cantidad correspondiente.
// Si el DNI no existe en el fichero, devuelva un mensaje indicando que la persona no tiene que pagar.
// Valide que el DNI tenga un formato correcto (8 dígitos seguidos de una letra mayúscula) antes de realizar la búsqueda.
// Maneje errores como la inexistencia o inaccesibilidad del fichero dnis_con_deuda.txt.
// Muestre los mensajes de salida por consola.
// El fichero dnis_con_deuda.txt tiene el siguiente formato (DNI seguido de la cantidad a pagar, separados por una coma):

// Copiar
// 10000000Z,6329€
// 10000001S,1175€
// 10000002Q,3918€
// 10000003V,8666€
// 10000004H,393€
// 10000005L,3018€


// El script debe pasar las siguientes pruebas:

// node 4-check-dni 10000000Z debería mostrar por consola: "El contribuyente 10000000Z le toca pagar 6329€".
// node 4-check-dni 27681570N debería mostrar por consola: "El contribuyente 27681570N no le toca pagar".
// Además, necesito que me aportes el código para Node.js, junto con la resolución de posibles problemas que me pueda encontrar a la hora de utilizarlo, como por ejemplo, que el DNI no sea válido o que el fichero no exista.




const fs = require('fs');
const path = require('path');

// Función para validar el formato del DNI
function isValidDNI(dni) {
    const dniRegex = /^[0-9]{8}[A-Z]$/;
    return dniRegex.test(dni);
}

// Función principal
function checkDNI(dni) {
    const filePath = path.join(__dirname, 'dnis_con_deuda.txt');

    // Validar el formato del DNI
    if (!isValidDNI(dni)) {
        console.error('Error: El DNI proporcionado no es válido.');
        process.exit(1);
    }

    // Leer el fichero y buscar el DNI
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error: No se pudo leer el fichero dnis_con_deuda.txt.');
            process.exit(1);
        }

        const lines = data.split('\n');
        let found = false;

        lines.forEach(line => {
            if (line.startsWith(dni)) {
                found = true;
                const amount = line.split(',')[1].trim();
                console.log(`El contribuyente ${dni} le toca pagar ${amount}`);
            }
        });

        if (!found) {
            console.log(`El contribuyente ${dni} no le toca pagar`);
        }
    });
}

// Obtener el DNI desde los argumentos de línea de comandos
const dni = process.argv[2];

if (!dni) {
    console.error('Error: Debes proporcionar un DNI como argumento.');
    process.exit(1);
}

// Ejecutar la función principal
checkDNI(dni);
