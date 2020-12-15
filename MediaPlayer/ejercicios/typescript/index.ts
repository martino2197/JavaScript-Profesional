// console.log('Hello, TypeScript');

// function add(a: number, b: number) {
//     return a + b
// }

// const sum = add(2, 3)
// console.log(sum);

//Boolean
let muted: boolean = true
muted = false
// muted = "callado" ERROR

//Números
let age = 6
let numerador: number = 42
let denominador: number = age
let resultado = numerador / denominador

//String
let nombre: string = "Richard"
let saludo = `Me llamo ${nombre}`

//Arreglos
let people: string[] = []
people = ["Isabel", "Nicole", "Raul"]
// people.push(400)
let peopleAndNumbers: Array<String | Number> = []
peopleAndNumbers.push("Ricardo")
peopleAndNumbers.push(9001)

//Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo",
}

let colorFavorito: Color = Color.Azul
console.log(`Mi color favorito es ${colorFavorito}`);

//Any
let comodin: any = "Joker"
comodin = { type: "Wildcard"}

//Object
let someObject: object = { type: 'Wildcard' }