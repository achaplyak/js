// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// const txt = document.getElementById("text");
// const btn = document.getElementById("newButton");
// txt.style.display = 'block'
//
// btn.onclick = event => {
//     if (txt.style.display === 'block') {
//         txt.style.display = 'none'
//     } else {
//         txt.style.display = 'block'
//     }
// };
//
// //     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// btn.onclick = event => {
//     btn.style.display = 'none'
// };
//
// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// btn.onclick = ev => {
//     const inpt = document.getElementById("newInput");
//     const value = inpt.value;
//     if (value < 18 && value > 0){
//         alert('you are still too young')
//     } if (value <= 0 || value > 110){
//         alert('wrongly')
//     }
// };
//
// // - Создайте меню, которое раскрывается/сворачивается при клике
//
// const a1 = document.getElementById("a1");
//
// const subMenu = document.getElementById("subMenu");
//
// let flag = false;
//
// a1.onclick = event => {
//     if(flag){
//         subMenu.style.display = 'block';
//         flag = false;
//     } else {
//         subMenu.style.display = 'none';
//         flag = true;
//     }
// };
//
// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// //     Вывести список комментариев в документ, каждый в своем блоке.
// //     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let cmntArr = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// ];
//
// const content  = document.getElementById("content");
//
// cmntArr.forEach(item => {
//     const div = document.createElement('div');
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');
//     const button = document.createElement('button');
//
//     button.innerText = 'Click';
//     h2.innerText = item.title;
//     p.innerText = item.body;
//
//     button.onclick = () => {
//         p.hidden
//             ? p.hidden = false
//             : p.hidden = true
//     }
//
//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(button);
//
//     content.appendChild(div);
//
// })
//
// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// const newBtn = document.getElementById('btn');
// const inputOne = document.getElementById('inputOne');
// const inputTwo = document.getElementById('inputTwo');
// const inputThree = document.getElementById('inputThree');
// const inputFour = document.getElementById('inputFour');
//
// newBtn.onclick = ev => {
//     console.log(inputOne.value);
//     console.log(inputTwo.value);
//     console.log(inputThree.value);
//     console.log(inputFour.value);
// }
//
// // - Створити функцію, яка генерує таблицю.
// //     Перший аргумент визначає кількість строк.
// //     Другий параметр визначає кліькіть ячеєк в кожній строці.
// //     Третій параметр визначає елемент в який потрібно таблицю додати.
//
// const newContent = document.getElementById("newContent");
//
// function createTable(rows, cols, tag){
//     const table = document.createElement("table");
//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement("tr");
//         for (let j = 0; j < cols; j++) {
//             const td = document.createElement("td");
//             td.innerHTML = "test";
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//
//     }
//     tag.appendChild(table);
// }
// createTable(4, 5, newContent)
//
// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
// //
// // - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// let imgArr = [
//     {
//         id: 1,
//         img_url: 'img01.jpg'
//     },
//     {
//         id: 2,
//         img_url: 'img02.jpg'
//     },
//     {
//         id: 3,
//         img_url: 'img03.jpg'
//     },
//     {
//         id: 4,
//         img_url: 'img04.jpg'
//     },
//     {
//         id: 5,
//         img_url: 'img05.jpg'
//     },
// ];
//
// const contentImg = document.getElementById("contentImg");
//
// const img = document.createElement('img');
// const buttonOne = document.createElement('button');
// const buttonTwo = document.createElement('button');
//
// buttonOne.innerText = '←'
// buttonTwo.innerText = '→'
//
// let index = 0;
//
// img.width = 400;
// img.src = imgArr[index].img_url;
//
// contentImg.appendChild(img);
// contentImg.appendChild(buttonOne);
// contentImg.appendChild(buttonTwo);
//
// buttonOne.onclick = () => {
//     index - 1 < 0
//         ? index = imgArr.length - 1
//         : index = index - 1
//
//     img.src = imgArr[index].img_url
// };
//
// buttonTwo.onclick = () => {
//     index + 1 > imgArr.length - 1
//         ? index = 0
//         : index = index + 1
//
//     img.src = imgArr[index].img_url
// };

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст
// и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

const hwH2 = document.getElementsByTagName('h2');
const newRules = document.getElementById('newRules');
const wrap = document.getElementById('wrap');
const ul = document.createElement('ul');

for (let i = 0; i < hwH2.length; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    let anchor = 'anchor' + i;
    a.href = '#' + anchor;
    hwH2[i].setAttribute('id', anchor);
    a.innerHTML = hwH2[i].innerText;
    li.appendChild(a);
    ul.appendChild(li);
}

newRules.appendChild(ul);
newRules.style.width = '30%'
wrap.style.width = '70%'
newRules.style.float = 'left'
wrap.style.float = 'left'

// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан