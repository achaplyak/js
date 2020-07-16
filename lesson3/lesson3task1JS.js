// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

let arrDog = {
    breed: "doberman",
    age: 2,
    fur: "short-haired",
    dimensions: "medium size",
    character: "submissive"
}

let arrPerson = {
    name: "John",
    age: 29,
    eyes: "silver",
    height: 189,
    profession: "IT"
}

let arrCar = {
    manufacturer: "Ford",
    class: "CompactCar",
    layout: "front-engine",
    predecessor: "FordEscort",
    successor: "FordEscape"
}

let arrApartment = {
    height: 250,
    width: 500,
    length: 600,
    color: "white",
    style: "loft"
}

let arrBookShawshankRedemption = {
    author: "StephenKing",
    country: "UnitedStates",
    language: "English",
    genre: "CrimeFiction",
    publication: 1982
}

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

let massDog = ["Dobermann", "Labrador", "Shepherd", "Laika", "Rottweiler"];
let massHuman = ["Andriy", "Maksym", "Pavlo", "Jaryna", "Olya"];
let massCar = ["Ford", "Mercedes", "Volkswagen", "Audi", "LandRover"];

console.log(massDog);
console.log(massHuman);
console.log(massCar);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

let arrApart = {
    height: 250,
    width: 500,
    length: 600,
    color: ["white", "silver", "black"],
    style: "loft"
}

let arrChauffeur = {
    name: "John",
    age: 29,
    eyes: "silver",
    height: 189,
    car: ["Ford", "Audi", "Mercedes"]
}

let arrLego = {
    type: "ConstructionSet",
    inventor: ["Ole", "Kirk", "Christiansen"],
    company: "TheLegoGroup",
    country: "Denmark",
    availability: "1949–present"
}

let arrTable = {
    height: 110,
    width: 100,
    length: 200,
    color: ["white", "silver"],
    style: "loft"
}

let arrBag = {
    brand: "Armani",
    price: "350$",
    color: "black",
    size: "OneSize",
    details: ["76% Viscose", "12% Polyester", "9% Cotton", "3% Metallic Fiber"]
}

// Дан массив:
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

console.log(users[7].status);
console.log(users[4].status);
console.log(users[9].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[10].age);
console.log(`name: ${users[4].name}, age: ${users[4].age}`);
console.log(`age: ${users[5].age}, status: ${users[5].status}`)

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
let frstContent = document.getElementById('content');
console.log(frstContent.textContent);

// - отримує текст з блоку з id "rules"

let scndContent = document.getElementById('rules');
console.log(scndContent.textContent);

// - замініть текст параграфа з id 'content' на будь-який інший

frstContent.innerText = 'Хай тут буде довільний текст';

// - замініть текст параграфа з id 'rules' на будь-який інший

scndContent.innerText = 'Хай тут буде довільний текст';

// - змініть кожному елементу колір фону на червоний

frstContent.style.backgroundColor = 'red';
scndContent.style.backgroundColor = 'red';

let fcRules = document.getElementsByClassName('fc_rules');
fcRules[0].style.backgroundColor = 'red'
fcRules[1].style.backgroundColor = 'red'
fcRules[2].style.backgroundColor = 'red'
fcRules[3].style.backgroundColor = 'red'

// - змініть кожному елементу колір тексту на синій

frstContent.style.color = 'blue'
scndContent.style.color = 'blue'
fcRules[0].style.color = 'blue'
fcRules[1].style.color = 'blue'
fcRules[2].style.color = 'blue'
fcRules[3].style.color = 'blue'

// - отримати весь список класів елемента з id=rules і вивести їх в console.log

for (let i = 0; i < fcRules.length; i++){
    console.log(fcRules[i])
}

// - отримати всі елементи з класом fc_rules

for (const filed in fcRules){
    console.log(filed)

// - поміняти колір тексту у всіх елементів fc_rules на червоний

fcRules[0].style.color = 'red'
fcRules[1].style.color = 'red'
fcRules[2].style.color = 'red'
fcRules[3].style.color = 'red'

// ====================
// ====================
// ====================

// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// -- робить шириниу елементу ul 400 пікселів
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// -- отримує текст який зберігається в елементі з класом listElement2
// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення