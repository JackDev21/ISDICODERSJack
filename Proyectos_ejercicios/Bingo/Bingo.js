/* BINGO GAME! 🎲🎰
Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. Durante el primer turno se mostrará un cartón con 15 números 
(excluyendo el 0 siempre), para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número, si coincide con alguno de los existentes en el cartón, 
cambiará por una "X" o un 0. El cartón se mostrará, al final de cada turno, con los cambios efectuados, indicándole al usuario qué número se ha encontrado. El programa deberá 
preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.

Por supuesto, cuando todos los números de una misma linea estén en "X", mostrará una única vez el mensaje "LINEA!", pero la ejecución seguirá, el juego solo acabará 
cuando todos los números estén a "X".

Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. Por último, deberá preguntar si desea volver a jugar.

Empieza por la versión más básica! (No se entrega)
Why?
Comenzar por una versión muy pequeña y básica nos hará tener un programa de principio a fin, es decir, que empieza, que acaba y haga lo que queramos a muy pequeña escala, 
una vez lo tengamos todo bien dividido podremos empezar a extenderlo tanto como queramos.

Si funciona con 5 números deberá funcionar con 15, no? 😁

Requisitos de la versión mínima:
Cartón con solo 5 números, sin necesidad de ser generados random. Solo necesitamos un número random cuando recorramos el cartón y veamos si hay alguna coincidencia. 
No necesitamos asegurarnos que el número random de cada turno no haya salido en turnos anteriores, recuerda que estamos en la mínima versión posible, eso ya lo solucionaremos.
Si hay coincidencia, remplazaremos el número por una 'x' y mostramos el cartón modificado

Sepáralo todo en funciones, englobado en una función global llamada bingo(), tal que:

-Function! => Generar Numero Random Bombo

-Function! => Nuevo turno (Match carton[i] === randomNum)

-Function! => Preguntar Nuevo Turno

WorkFlow:


Pro 👊🏼

Cuando se muestre la carta, se preguntará al usuario si realmente quiere ese cartón o generar otro, si realmente quiere ese cartón, deberá responder "yes" para proceder.
Los números del cartón deben aparecer de una forma amigable y ordenados de menor a mayor.
Los números del cartón no se pueden repetir.
Establece un sistema de puntos, en cuantos más turnos se complete el cartón, menos puntos (el sistema de puntos intégralo como quieras), por el contrario, a menos turnos, más puntos.
Antes de empezar el juego, muestra el sistema de puntos al usuario.
Ranking de usuarios (ordenado por puntos).
Recursos: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */


const readlineSync = require("readline-sync");

const bingo = () => {
    let lineaCantada = false;
    const bingoGame = (user) => {
        console.log("BINGO GAME!");
        console.log(`Bienvenido ${user}!`);
    };


    const generarCarton = () => {
        const carton = new Set(); // Se crea un set para evitar repeticiones.

        while (carton.size < 15) { // Mientras el cartón no tenga 15 elementos.
            const numero = Math.floor(Math.random() * 30) + 1; // Generamos un numero aleatorio entre 1 y 30.
            carton.add(numero); // Añadimos el numero al set.
        }

        return Array.from(carton); // Convertimos el set en un array.
    };



    const mostrarCarton = (user, carton) => {
        carton.sort((a, b) => a - b); // Ordenar el carton de menor a mayor

        const rows = [];
        for (let i = 0; i < 3; i++) {
            const row = {};
            for (let j = 0; j < 5; j++) {
                row[`Columna ${j + 1}`] = carton[i * 5 + j];
            }
            rows.push(row);
        }

        console.log(`Cartón de ${user}:`);
        console.table(rows);
    };





    const turno = (carton) => {
        const randomNum = Math.floor(Math.random() * 30) + 1; // Generamos un numero aleatorio entre 1 y 30.
        console.log(`El numero es: ${randomNum}`); // Mostramos el numero aleatorio.

        if (carton.includes(randomNum)) { // Verificamos si el numero existe en el cartón.
            const index = carton.indexOf(randomNum); // Obtenemos el indice del numero.
            carton[index] = "X"; // Cambiamos el numero por una X.
            console.log(`El numero ${randomNum} ha sido encontrado.`);
        } else {
            console.log(`El numero ${randomNum} no ha sido encontrado en tu cartón.`);
        }

        mostrarCarton(user, carton); // Mostramos el cartón.
        return carton;
    };


    const linea = (carton) => {
        if (!lineaCantada) { // Verificar si la línea no ha sido cantada antes
            const filas = [
                carton.slice(0, 5),
                carton.slice(5, 10),
                carton.slice(10, 15)
            ];
            for (let fila of filas) {
                if (fila.every(element => element === 'X')) {
                    console.log("¡LINEA!");
                    lineaCantada = true; // Actualizar el indicador
                }
            }
        }
    };


    const nuevoTurno = (carton) => {
        let continuar = true;
        while (continuar && !carton.every(element => element === 'X')) {
            console.log("¿Deseas seguir jugando? (Si/No)");
            const answer = readlineSync.question().toLowerCase();
            if (answer === "no") {
                console.log('¡Gracias por jugar!');
                continuar = false;
            } else {
                carton = turno(carton);
                linea(carton);
            }
        }

        if (carton.every(element => element === 'X')) {
            console.log('¡Bingo! Has completado el cartón. ¡Felicitaciones!');
        }
    };

    const user = readlineSync.question("Bienvenido al Bingo!. Introduce tu nombre de jugador: "); // Pedimos nombre al jugador.
    let carton = generarCarton();

    bingoGame(user);
    mostrarCarton(user, carton);
    carton = turno(carton);
    linea(carton);
    nuevoTurno(carton);
};

bingo();
