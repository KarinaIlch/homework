//Задание 1 * 
// Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна".
// Создайте еще один массив с возрастами: 18, 27, 74, 34; 
// Создайте и заполните при помощи цикла этот новый массив новыми элементами 
// по образу: "Семен 18 лет/годов"//

const names =  ["Семен", "Иван", "Петр", "Татьяна"];
const numbers = [18, 27, 74, 34];

const nameAndNumber = [];


for (let i = 0; i < names.length; i++) {
  nameAndNumber.push(names[i] + " " + numbers[i] + " лет");
}
console.log(nameAndNumber);

//Задание 2
// Используя пройденные на занятии методы массива 
// получите из этого массива новый массив,
// в котором элементы идут в обратной последовательности.//

// Вариант 1

const reversedArray = [];
for (let i = nameAndNumber.length - 1; i >= 0; i--) {
  reversedArray.push(nameAndNumber[i]);
}

// Вариант 2 

console.log(reversedArray);

const reversed = nameAndNumber.slice().reverse();
console.log("В обратной последовательности: ", reversed);

// Задание 3
// Создайте пустой массив fruits. 
// добавьте в массив следующие фрукты: 
// "яблоко", "банан", "апельсин". 
// Удалите последний элемент из массива и 
// сохраните значение в переменной. 
// Добавьте его в начало массива. 
// Выведите fruits в консоль.

const fruits = [];
fruits.push("Apple", "Banana", "Orange");
const orange = fruits.pop();
fruits.unshift(orange)

console.log(fruits)
console.log (orange)
console.log(fruits)

// Задание 4
// Объедините fruits с массивом veggies 
// (в него добавьте строки овощи) 
// через spread в массив fruitsAndVeggies 
// Используя деструктуризацию заведите 
// переменную под каждый элемент нового массива 
// Выведите fruitsAndVeggies в консоль

const veggies = ["Tomato", "Broccoli", "Carrot", "Corn"];
const fruitsAndVeggies = [...fruits, ...veggies];
console.log(fruitsAndVeggies);

const [first, second, third, fourth] = fruitsAndVeggies;
console.log(first);  
console.log(second);  
console.log(third);   
console.log(fourth);

