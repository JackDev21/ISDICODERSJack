// Javascript Array


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num.at(1) // 2  .at() es para acceder a un elemento de un array al igual que num[1]
num.push(11) // Añade el elemento 11 al final del array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
num.pop() // Elimina el ultimo elemento del array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num.fill(1) // Rellena todos los elementos del array con el numero 1 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
num.shift() // Elimina el primer elemento del array [2, 3, 4, 5, 6, 7, 8, 9, 10]
num.reverse() // Invierte el orden de los elementos del array [10, 9, 8, 7, 6, 5, 4, 3, 2]
num.includes(2) // Devuelve true si el numero 2 esta en el array [true]
num.map(item => 2 * item) // Recorre cada elemento del array y lo multiplica por 2 [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] 
num.filter(item => item > 2) // Filtra los elementos del array que sean mayores que 2 [3, 4, 5, 6, 7, 8, 9, 10]
num.find(item => item > 2) // Devuelve el primer elemento del array que sea mayor que 2 [3])
num.every(item => item > 0) // Devuelve true si todos los elementos del array son mayores que 0 [true]
num.findIndex(item => item === 2) // Devuelve el indice del primer elemento del array que sea igual a 2 [1]
num.reduce((inicial, acumulador) => inicial + acumulador, 0) // Devuelve la suma de todos los elementos del array [55]
num.toString() // Convierte el array en una cadena de texto [1,2,3,4,5,6,7,8,9,10]
num.join("*") // Convierte el array en una cadena de texto separada por * [1*2*3*4*5*6*7*8*9*10]
num.splice(2, 0, "i", "p") // Inserta los elementos i y p en el array en la posicion 2 [1, 2, i, p, 3, 4, 5, 6, 7, 8, 9, 10] 
num.splice(2, 1, "i", "p") // Elimina el elemento en la posicion 2 y lo reemplaza por i y p [1, 2, i, p, 5, 6, 7, 8, 9, 10] 
num.sort() // Ordena el array de menor a mayor alfabeticamente [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
num.sort(function (a, b) { return a - b; }) // Ordena el array de menor a mayor numerico [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num.sort(function (a, b) { return b + a; }) // Ordena el array de mayor a menor numerico [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
num.sort(function (a, b) { return 0.5 - Math.random() }) // Ordena el array de forma aleatoria [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]