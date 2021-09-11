//Variables

var num1 = 50;
const num2 = 60;
let num3 = 35;

//Sentence IF
if (true) {
} else if (false) {
}

//For
const fruits = [
  {
    id: 1,
    name: 'Banano',
    price: 500
  },
  {
    id: 2,
    name: 'Manzana',
    price: 1000
  },
  {
    id: 3,
    name: 'Pera',
    price: 500
  }
];

for (let fruit of fruits) {
  console.log(fruit.name);
}

const sumar = (num1, num2) => {
  return num1 + num2;
};

const showFruit = fruit => {
  console.log(fruit);
};

fruits.forEach(showFruit);

//Switch
let selector = 1;

switch (selector) {
  case 1:
    console.log('El usuarioe scogio el 1');
    break;
  default:
    console.log('Opcion invalida');
}
