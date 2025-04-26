//1. Variables: let y const
//let nombre = 'Joaquin';
//const edad = '30';

//console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.\n`);

////2. Estructuras y tipos de datos
//const producto = {
//	nombre: 'Arroz',
//	precio: 50,
//	enStock: true,
//};

//console.log(`Producto: ${producto.nombre}\nPrecio:${producto.precio}\n`);

//3. Condicionales (if / else)
// const readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// rl.question('Ingresa tu edad: ', (answer) => {
// 	if (parseInt(answer) >= 18) {
// 		console.log('Eres mayor de edad.');
// 	} else if (parseInt(answer) < 18) {
// 		console.log('Eres menor de edad');
// 	} else {
// 		console.log('Debes ingresar un número válido');
// 	}

// 	rl.close();
// });

//4. Arreglos y objetos
// const arr = ['Juan', 'Pepe', 'Andres'];

// const objeto = {
// 	amigos: [arr],
// };

//5. Funciones y arrow functions
//console.log(objeto.amigos[0]);

//function suma(num1, num2) {
//	return num1 + num2;
//}

//console.log(suma(1, 2) + '\n');

//const sumaFlecha = (num1, num2) => {
//	return num1 + num2;
//};

//console.log(sumaFlecha(2, 3) + '\n');

////6. Selectores de DOM / Eventos del DOM
//const button = document.querySelector('#button');

//button.addEventListener('click', () => {
//	console.log('¡Botón presionado!');
//});

//7. Fetch API y promesas
// async function fetchData() {
// 	const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);

// 	return await data.json();
// }

// fetchData().then((res) => {
// 	console.log(
// 		`Titulo 1: ${res[0].title}\nTitulo 2: ${res[1].title}\nTitutlo 3: ${res[2].title}`
// 	);
// });
