// - створити функцію яка виводить масив

function taskOne(a) {
    console.log(a);
}

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

taskOne([27, 14, 193, 7, 11]);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function taskTwo (a, b, c) {
    let min = Math.min(a, b, c);
    console.log(min);
    return min;
}

taskTwo (9, 3, 4);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

function taskThree (a, b, c) {
    let max = Math.max(a, b, c);
    console.log(max);
    return max;
}

taskThree (74, 19, 36);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function taskFour (a, b, c) {
    let min = Math.min(a, b, c);
    let max = Math.max(a, b, c);
    console.log(max);
    return min;
}

taskFour(17, 51, 2);

// - створити функцію яка виводить масив

function taskFive (b) {
    console.log(b);;
}

taskFive(['Hello I am function']);

// - створити функцію яка повертає найбільше число з масиву

let arrSix = [17, 24, 5, 6]

function taskSix (arrName) {
    let max = 0;
    for (let i = 0; i < arrName.length; i++){
        if (arrName[i] > max) max = arrName[i]
    }
    return max
}

let f = taskSix(arrSix);

// - створити функцію яка повертає найменьше число з масиву

let arrSeven = [17, 24, 5, 6]

function taskSeven (arrName) {
    let min = arrName[0];
    for (let i = 0; i < arrName.length; i++){
        if (arrName[i] < min) min = arrName[i]
    }
    return min
}

let g = taskSeven(arrSeven);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

let arrEight = [7, 21, 14, 2, 46];

function taskEight (arrName) {
    let b = 0;
    for (const arrNameElement of arrName) {
        b += arrNameElement;
    }

    return b;
}

console.log(taskEight(arrEight));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arrNine = [7, 21, 14, 2, 46];

function taskNine(arrName) {
    let a = 0;
    for (const arrNameElement of arrName) {
        a += arrNameElement;
    }
    return a / arrName.length;
}

console.log(taskNine(arrNine));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

let arrTen = [24, 'Andriy', false, 17, true, {name: 'Max', wife: false}, false, {name: 'Andriy'}];

function taskTen(arrName) {
    let f = 0;
    for (const arrNameEl of arrName) {
        if (typeof arrNameEl === "object"){
            f++;
        }
    }
    return f;
}

console.log(taskTen(arrTen));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

let arrEleven = [24, 'Andriy', false, 17, true, {name: 'Max', wife: false}, false, {name: 'Andriy'}];

function taskEleven(arrName) {
    let c = 0;
    for (const arrObj of arrName) {
        if (typeof arrObj === 'object'){
            for (const key in arrObj){
                c++;
            }
        }
    }
    return c;
}

console.log(taskEleven(arrEleven));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let arrTwelveOne = [1, 2, 3, 4];
let arrTwelveTwo = [2, 3, 4, 5];

function taskTwelve(arrNameOne, arrNameTwo) {
    let r = [];
    for (let i = 0; i < arrNameOne.length; i++) {
        r.push(arrNameOne[i] + arrNameTwo[i]);
    }
    return r;
}

console.log(taskTwelve(arrTwelveOne, arrTwelveTwo));

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
let arrThir= [1, 2, 3, 4, 5, 6]

function f1(arrName, i) {


}


f1 (arrThir, 2)
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

function f2() {
    let div = document.createElement('div');
    div.innerText = "Hello owu";
    document.body.appendChild(div);
}

f2();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function f3(text, type) {
    let element = document.createElement(type);
    element.innerText = text;
    document.body.appendChild(element);
}

f3('ok10', 'h1');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]