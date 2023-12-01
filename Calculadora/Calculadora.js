

/*Calculator! ➗➕
Haz una calculadora.

Primera versión que no se entrega.
Un único programa al que le pasarás dos argumentos que recogerás mediante el método prompt(); el usuario podrá visualizar por consola la suma, resta, multiplicación y 
división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho (en caso de que hubieran). El programa debe gestionar y actuar correctamente 
(gestión de errores) en el caso de que el usuario introduzca cualquier cosa que no sean números.

Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
Si el usuario introduce una letra, deberá mostrarle un aviso de que lo que ha introducido no es un número.
Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.

Versión PRO para Entregar.
Ahora que ya has hecho una primera versión de la calculadora. ¿Podrías hacer que la calculadora realice operaciones sean cuales sean el número de argumentos pasados a la función?
Después de hacer todas las operaciones, el programa deberá preguntar al usuario si desea volver a realizar otra operación, volviendo a almacenar más resultados y mostrándolos.
En ninguna de las dos versiones el usuario debe seleccionar la operación matemática, directamente se mostrarán las operaciones correspondientes (si hay un solo número se mostrará la raíz cuadrada de ese número y si hay más de un número se mostrarán las 4 operaciones).
Prohibido usar la función eval().

Documentación: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters */


const prompt = require("readline-sync"); // Importamos el paquete readline-sync para poder leer por consola

console.log("Bienvenido a la calculadora!"); // Mostramos un mensaje de bienvenida
let input1 = prompt.question("Introduce el primer número a calcular: "); // Leemos por consola el primer valor
let input2 = prompt.question("Introduce el segundo número a calcular (o deja en blanco para calcular la raíz cuadrada): ");

let valor1 = Number(input1);
let valor2 = Number(input2);

if (isNaN(valor1)) { // Si el valor1 introducido no es un número, mostramos un mensaje de error y salimos del programa.
    console.log("El primer valor no es un número, introduce un número válido.");
    return;
}

// Si sólo se ha introducido un número (valor1) y el segundo input está vacío o no es un número, calculamos la raíz cuadrada.
if (input2 === "" || isNaN(valor2)) {
    console.log(`La raíz cuadrada de ${valor1} es: ` + Math.sqrt(valor1).toFixed(3));
} else {
    // Si ambos valores son números, procedemos con las operaciones de la calculadora.
    const calculator = (a, b) => {
        const suma = a + b;
        const resta = a - b;
        const multiplicacion = a * b;
        let division;
        if (b === 0) {
            division = "No se puede dividir entre 0";
        } else {
            division = (a / b).toFixed(3);
        }

        return {
            suma: suma.toFixed(3),
            resta: resta.toFixed(3),
            multiplicacion: multiplicacion.toFixed(3),
            division: division
        };
    }
    console.log(calculator(valor1, valor2));
}