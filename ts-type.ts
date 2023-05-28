console.log("hola");

let velocity_light: number = 300_000;
let favourite_food: string = "ceviche";
let is_single: boolean = false;

let new_variable: string;
new_variable = "soy una nueva variable";

const new_function = (a: number, b: number) => {
  return `Soy una funcion y los datos que me diste son : ${a} y ${b} `;
};

let animals: string[] = ["cat", "dog", "mouse"];
let numbers: number[] = [71, 23, 1];
let checks: boolean[] = [];
let nums2: Array<number> = [];

// numbers.map(x=> x.) // El autocompletado sugiere metodos del tipo de dato

//tuplas = Es una variable que contiene un set de datos que se tienen ordenados

let tupla: [number, string] = [1, "Soy yo"];
let tupla2: [number, string[]] = [1, ["pequeño", "mediano", "grande"]];

const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";

//PascalCase

enum Talla {
  Chica = "s",
  Mediana = "m",
  Grande = "l",
  Extragrande = "xl",
}

const pruebaEnum = Talla.Chica;

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingState.Idle;

type Address = {
  number: number;
  street: string;
  country: string;
};

type parametros = {
  readonly id: number;
  name?: string;
  talla: Talla;
  address: Address;
};

const object: parametros = {
  id: 1,
  name: "Paul",
  talla: Talla.Chica,
  address: {
    number: 23,
    street: "Los olivos",
    country: "Peru",
  },
};

const arr: parametros[] = [];

console.log(pruebaEnum);

console.log(estado);

console.log(velocity_light);
console.log(favourite_food);
console.log(is_single);

console.log(new_variable);

console.log(new_function(2, 20));

console.log(animals);
