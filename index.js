/* //Ejercicio 1
const saludar = nickname => {
  return 'Hola ' + nickname;
};

var saludo = saludar('GiiO');
console.log(saludo);

//////////////////////

const sumar = (n1, n2, n3) => {
  return n1 + n2 + n3;
};
var resultado = sumar(1, 2, 3);
console.log(resultado);

//////////////////////

const sumard = (n1, n2, n3) => {
  if (!n2) return n1;
  if (n3) return n1 + n2 + n3;
  return n1 + n2;
};

const pruebaSuma = sumard(1);
console.log(pruebaSuma); */

///////////////////////

const sumarArray = listaNumeros => {
  let totalSuma = 0;

  for (let numero of listaNumeros) {
    totalSuma = numero + totalSuma;
  }

  return totalSuma;
};

const resultadoTotal = sumarArray([
  1,
  1,
  10,
  50,
  1,
  1,
  1,
  1,
  4,
  5,
  4,
  7,
  5,
  4,
  7,
  5,
  4,
  7,
  5,
  4,
  7,
  5
]);
console.log(resultadoTotal);
