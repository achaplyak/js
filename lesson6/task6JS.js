//
// - создать массив с 20 числами.

let arrOne = [4, 32, 17, 2, 46, 26, 9, 8, 12, 10, 93, 12, 86, 1, 15, 0, 17, 56, -2, 74];

// -- при помощи метода sort и колбека  отсортировать массив.

let newArr = arrOne.sort();

let newArrTwo = arrOne.sort((a, b) => a - b);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

let newArrThree = arrOne.sort((a, b) => b - a);

// -- при помощи filter получить числа кратные 3

let newArrFour = arrOne.filter(value => value % 3 === 0 && value !== 0);

// -- при помощи filter получить числа кратные 10

let newArrFive = arrOne.filter(value => value % 10 === 0 && value !== 0);

// -- перебрать (проитерировать) массив при помощи foreach()

let newArrSix = arrOne.forEach(value => console.log(value));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let newArrSeven = arrOne.map(value => value*3);

// - создать массив со словами на 15-20 элементов.

let arrWords = ['recording', 'help', 'world', '17', 'Target', 'performance', 'time', 'sun', '24', 'a', 'For', 'the', 'from', 'you', 'Details', 'see', 'new'];

// -- отсортировать его по алфавиту в восходящем порядке.

let string = arrWords.sort((a ,b) => {
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    return 0;
});

// -- отсортировать его по алфавиту  в нисходящем порядке.

let stringTwo = arrWords.sort((a ,b) => {
    if (a.toLowerCase() > b.toLowerCase()) return -1;
    if (a.toLowerCase() < b.toLowerCase()) return 1;
    return 0;
});

// -- отфильтровать слова длиной менее 4х символов

let stringFour = arrWords.filter(value => value.length < 4);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

let stringFive = arrWords.map(value => {
    value += '!';
    return value;
});

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
    let users = [ {name: 'vasya', age: 31, status: false},
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
// - відсортувати його за  віком (зростання , а потім окремо спадання)

let newUsersUp = users.sort((a, b) => a.age - b.age);
//--
let newUsersDown = users.sort((a, b) => b.age - a.age);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

let newUsersNamesUp = users.sort((a, b) => a.name.length - b.name.length);
//--
let newUsersNamesDown = users.sort((a, b) => b.name.length - a.name.length);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

let newArrUsrs = JSON.parse(JSON.stringify(users));

let myUsers = newArrUsrs.map((user, index) => {
    user.id = index;
    return user;
});

console.log(myUsers);

// - відсортувати його за індентифікатором

myUsers.sort((a, b) => a.id - b.id)

// -- наисать функцию калькулятора с 2мя числами и колбеком

function cal(a, b, callback) {
    return callback(a, b);
}

let result = cal(17, 21, function (a, b) {
    return a + b;
});

console.log(result);

// -- наисать функцию калькулятора с 3мя числами и колбеком

function calScnd(a, b, c, callback) {
    return callback(a, b, c);
}

let resultScnd = calScnd(17, 21, 2, function (a, b, c) {
    return a + b + c;
});

console.log(resultScnd);

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
let cars = [
        {
            producer: "subaru",
            model: "wrx",
            year: 2010,
            color: "blue",
            type: "sedan",
            engine: "ej204x",
            volume: 2,
            power: 400
        },
        {
            producer: "subaru",
            model: "legacy",
            year: 2007,
            color:"silver",
            type: "sedan",
            engine: "ez30",
            volume: 3,
            power: 250
        },
        {
            producer: "subaru",
            model: "tribeca",
            year: 2011,
            color: "white",
            type: "jeep",
            engine: "ej20",
            volume: 2,
            power: 300
        },

        {
            producer: "subaru",
            model: "leone",
            year: 1998,
            color: "yellow",
            type: "sedan",
            engine: "ez20x",
            volume: 2,
            power: 140
        },

        {
            producer: "subaru",
            model: "impreza",
            year: 2014,
            color: "red",
            type: "sedan",
            engine: "ej204x",
            volume: 2,
            power: 200
        },

        {
            producer: "subaru",
            model: "outback",
            year: 2014,
            color: "red",
            type: "hachback",
            engine: "ej204",
            volume: 2,
            power: 165
        },

        {
            producer: "bmw",
            model: "115",
            year: 2013,
            color: "red",
            type: "hachback",
            engine: "f15",
            volume: 1.5,
            power: 120
        },

        {
            producer: "bmw",
            model: "315",
            year: 2010,
            color: "white",
            type: "sedan",
            engine: "f15",
            volume: 1.5,
            power: 120
        },

        {
            producer: "bmw",
            model: "650",
            year: 2009,
            color: "black",
            type: "coupe",
            engine: "f60",
            volume: 6,
            power: 350
        },

        {
            producer: "bmw",
            model: "320",
            year: 2012,
            color: "red",
            type: "sedan",
            engine: "f20",
            volume: 2,
            power: 180
        },

        {
            producer: "mercedes",
            model: "e200",
            year: 1990,
            color: "silver",
            type: "sedan",
            engine: "eng200",
            volume: 2,
            power: 180
        },

        {
            producer: "mercedes",
            model: "e63",
            year: 2017,
            color: "yellow",
            type: "sedan",
            engine: "amg63",
            volume:3,
            power: 400
        },

        {
            producer: "mercedes",
            model: "c250",
            year: 2017,
            color: "red",
            type: "sedan",
            engine: "eng25",
            volume: 2.5,
            power: 230
        }
    ];
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів

let volumeThree = cars.filter(item => item.volume >= 3);

// - двигун = 2л

let volumeTwo = cars.filter(item => item.volume === 2);
console.log(volumeTwo);

// - виробник мерс

let producers = cars.filter(item => item.producer === 'mercedes');

// - двигун більше 3х літрів + виробник мерседес

let producerVolume = cars.filter(item => item.producer === 'mercedes' && item.volume >= 3);

// - двигун більше 3х літрів + виробник субару

let producerVolumeTwo = cars.filter(item => item.producer === 'subaru' && item.volume >= 3);

// - сили більше ніж 300

let powers = cars.filter(item => item.power >= 300);

// - сили більше ніж 300 + виробник субару

let powersProducer = cars.filter(item => item.power >= 300 && item.producer === 'subaru');

// - мотор серіі ej

let engines = cars.filter(item => item.engine.startsWith('ej'));

// - сили більше ніж 300 + виробник субару + мотор серіі ej

let powersProducerEngine = cars.filter(item => item.power >= 300
    && item.producer === 'subaru'
    && item.engine.startsWith('ej'));

// - двигун меньше 3х літрів + виробник мерседес

let producerVolumeSecond = cars.filter(item => item.producer === 'mercedes' && item.volume <= 3);

// - двигун більше 2л + сили більше 250

let volumePowers = cars.filter(item => item.volume >= 2 && item.power >= 250);

// - сили більше 250  + виробник бмв

let powersProducers = cars.filter(item => item.power >= 250 && item.producer === 'bmw');

//
//
//
// - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный
//
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.