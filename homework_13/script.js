
// Используйте методы массивов.

// 1.1 Создайте на основе старого массива новый массив 
// объектов по образу: [{ name: "Luke Skywalker", isJedi: true }, { name: "Han Solo", isJedi: false }, ...]
// 1.2 Создайте новый массив с джедаями младше 40 лет
// 1.3 Посчитайте возраст всех джедаев
// 1.4 Повысьте возраст героев на 10 лет
// 1.5 Создайте новый массив, где "Anakin Skywalker" 
// заменен на: { name: "Darth Vader", isJedi: false, age: 50 }

const starWarsHeroes = [
    { name: "Leia Organa", age: 25, isJedi: true },
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Agen Kolar", age: 49, isJedi: false },
    { name: "Bo-Katan Kryze", age: 29, isJedi: true },
    { name: "Baze Malbus", age: 40, isJedi: false },
];


const ageHero = starWarsHeroes.filter((el) => el.age < 40)
console.log(ageHero)

const sumHeroesAges = starWarsHeroes.reduce((sum, el) => sum + el.age, 0);
console.log(sumHeroesAges)

for (let i = 0; i < starWarsHeroes.length; i++ ) {
    starWarsHeroes[i].age = starWarsHeroes[i].age + 10
}
console.log(starWarsHeroes)

const starWarsHeroes2 = starWarsHeroes.slice()
starWarsHeroes2[1] = {
    name:"Darth Vader",
    isJedi: false, 
    age: 50
};
console.log(starWarsHeroes2)