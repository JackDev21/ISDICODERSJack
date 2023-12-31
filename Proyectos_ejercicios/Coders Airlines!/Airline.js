/*Programa una primera versión (no entregar) de una inferfaz de usuario para una aerolinea (por terminal...). 
Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, cuando se llame a la función:

- Se preguntará por el nombre de usuario y dará la bienvenida.
- El usuario visualizará todos los vuelos disponibles de una forma amigable:
    El vuelo con origen: _Barcelona_, y destino: _Madrid_ tiene un coste de _XXXX€_ y no realiza _ninguna_ escala.
- A continuación, el usuario verá el coste medio de los vuelos.
- También podrá ver cuantos vuelos efectúan escalas.
- Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos. */

/*
const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, layover: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, layover: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, layover: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, layover: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
    ];
  console.log(flights[0].to); //output: New York*/

// - Se preguntará por el nombre de usuario y dará la bienvenida.
const flights = [
  { id: 0, to: "New York", from: "Barcelona", cost: 700, layover: false },
  { id: 1, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
  { id: 2, to: "Paris", from: "Barcelona", cost: 210, layover: false },
  { id: 3, to: "Roma", from: "Barcelona", cost: 150, layover: false },
  { id: 4, to: "London", from: "Madrid", cost: 200, layover: false },
  { id: 5, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
  { id: 6, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
  { id: 7, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
  { id: 8, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
  { id: 9, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
];


const readline = require("readline-sync");

// Definimos la función llamada interfazUsuario como una arrow function
const interfazUsuario = () => {
  // Se le pide al usuario su nombre y se almacena en usuarioNombre
  const usuarioNombre = readline.question(
    "Bienvenido a la aerolínea. Por favor, introduce tu nombre de usuario: "
  );

  // Mostramos mensaje de bienvenida con los vuelos disponibles
  console.log(
    `Bienvenido ${usuarioNombre}, estos son los vuelos disponibles: `
  );

  // Inicializamos una variable para el costo total de los vuelos
  let totalCoste = 0;

  // Recorremos cada vuelo en el array de vuelos usando un bucle for
  for (let i = 0; i < flights.length; i++) {
    const flight = flights[i]; // Accedemos al vuelo actual en la iteración

    // Determinamos si el vuelo realiza escala o no
    const escalaVuelo = flight.layover ? "Realiza escala" : "No realiza escala";

    // Mostramos la información detallada de cada vuelo al usuario
    console.log(
      `El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€ y ${escalaVuelo}.`
    );

    // Sumamos el costo del vuelo actual al costo total
    totalCoste = totalCoste + flight.cost;
  }

  // Calculamos el coste promedio de los vuelos
  const costePromedio = totalCoste / flights.length;

  // Mostramos el coste promedio de los vuelos al usuario
  console.log(`El coste promedio de los vuelos es: ${costePromedio}`);
};

// Llamamos a la función interfazUsuario para ejecutarla
interfazUsuario();
