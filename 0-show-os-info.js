// Mostrar 
// - Nombre del equipo
// - Edición/Versión del sistema operativo
// - Memoria ram total en **GB

const os = require('os');

console.log(`Nombre del equipo:${os.hostname()}`);
console.log(`Versión del sistema operativo: ${os.type()} ${os.release()}`);
console.log(`Memoria RAM total:${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
