// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================

function TagTaskOne (name, description, attributes) {
    this.name = name;
    this.description = description;
    this.attributes = attributes;
}

const a = new TagTaskOne(
    'a',
    'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.',
    [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
        {titleOfAttrSecond: 'coords', actionOfAttrSecond: 'Устанавливает координаты активной области.'}
    ]
);

const div = new TagTaskOne(
    'div',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',
    [
        {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
        {titleOfAttrSecond: 'title', actionOfAttrSecond: 'Добавляет всплывающую подсказку к содержимому.'}
    ]
);

const h1 = new TagTaskOne(
    'h1',
    'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.',
    [
        {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}
    ]
);

const span = new TagTaskOne(
    'span',
    'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',
    [
        {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'},
        {titleOfAttrSecond: 'contextmenu', actionOfAttrSecond: 'Устанавливает контекстное меню для элемента.'}
    ]
);

const input = new TagTaskOne(
    'input',
    'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.',
    [
        {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
        {titleOfAttrSecond: 'alt', actionOfAttrSecond: 'Альтернативный текст для кнопки с изображением.'}
    ]
);

const form = new TagTaskOne(
    'form',
    'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.',
    [
        {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
        {titleOfAttrSecond: 'method', actionOfAttrSecond: 'Метод протокола HTTP.'}
    ]
);

const option = new TagTaskOne(
    'option',
    'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',
    [
        {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
        {titleOfAttrSecond: 'label', actionOfAttrSecond: 'Указание метки пункта списка.'}
    ]
);

const select = new TagTaskOne(
    'select',
    'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',
    [
        {titleOfAttr: 'size', actionOfAttr: 'Количество отображаемых строк списка.'},
        {titleOfAttrSecond: 'tabindex', actionOfAttr: 'Определяет последовательность перехода между элементами при нажатии на клавишу Tab.'}
    ]
);

// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================

class TagTaskTwo {
    constructor(name, description, attributes) {
        this.name = name;
        this.description = description;
        this.attributes = attributes;
    }
}

const aTwo = new TagTaskTwo(
    'a',
    'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.',
    [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
        {titleOfAttrSecond: 'coords', actionOfAttrSecond: 'Устанавливает координаты активной области.'}
    ]
);

const divTwo = new TagTaskTwo(
    'div',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',
    [
        {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
        {titleOfAttrSecond: 'title', actionOfAttrSecond: 'Добавляет всплывающую подсказку к содержимому.'}
    ]
);

const h1Two = new TagTaskTwo(
    'h1',
    'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.',
    [
        {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}
    ]
);

const spanTwo = new TagTaskTwo(
    'span',
    'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',
    [
        {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'},
        {titleOfAttrSecond: 'contextmenu', actionOfAttrSecond: 'Устанавливает контекстное меню для элемента.'}
    ]
);

const inputTwo = new TagTaskTwo(
    'input',
    'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.',
    [
        {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
        {titleOfAttrSecond: 'alt', actionOfAttrSecond: 'Альтернативный текст для кнопки с изображением.'}
    ]
);

const formTwo = new TagTaskTwo(
    'form',
    'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.',
    [
        {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
        {titleOfAttrSecond: 'method', actionOfAttrSecond: 'Метод протокола HTTP.'}
    ]
);

const optionTwo = new TagTaskTwo(
    'option',
    'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',
    [
        {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
        {titleOfAttrSecond: 'label', actionOfAttrSecond: 'Указание метки пункта списка.'}
    ]
);

const selectTwo = new TagTaskTwo(
    'select',
    'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',
    [
        {titleOfAttr: 'size', actionOfAttr: 'Количество отображаемых строк списка.'},
        {titleOfAttrSecond: 'tabindex', actionOfAttr: 'Определяет последовательность перехода между элементами при нажатии на клавишу Tab.'}
    ]
);

// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

let car = {
        model:'Model 3',
        manufacturer:'Tesla, Inc.',
        yearOfProduction: 2017,
        maxSpeed: 261,
        battery: '54 or 62 or 75 kWh (190 or 220 or 270 MJ) Lithium ion',
        drive: function () {
                console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
        },
        info: function () {
                console.log(this);
        },
        increaseMaxSpeed: function (newSpeed){
                this.maxSpeed += newSpeed;
        },
        changeYear: function (newValue){
                this.yearOfProduction = newValue;
        },
        addDriver: function (driver){
                this.driver = driver;
        }
}

car.info();
car.increaseMaxSpeed(291);
car.changeYear(2019);
car.addDriver({name: 'Max', age: 23});
car.drive();



// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

function Car(model, manufacturer, yearOfProduction, maxSpeed, battery) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfProduction = yearOfProduction;
    this.maxSpeed = maxSpeed;
    this.battery = battery;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
    },
    this.info = function () {
        console.log(this);
    },
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed += newSpeed;
        console.log(newSpeed);
    },
    this.changeYear = function (newValue){
        this.yearOfProduction = newValue;
        console.log(newValue);
    },
    this.addDriver = function (driver){
        this.driver = driver;
        console.log(driver);
    }
}

let tesla = new Car('Model 3', 'Tesla, Inc.', 2017, 261,'54 or 62 or 75 kWh (190 or 220 or 270 MJ) Lithium ion');

// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

class NewCar {
    constructor(modelTwo, manufacturerTwo, yearOfProductionTwo, maxSpeedTwo, batteryTwo) {
        this.modelTwo = modelTwo;
        this.manufacturerTwo = manufacturerTwo;
        this.yearOfProductionTwo = yearOfProductionTwo;
        this.maxSpeedTwo = maxSpeedTwo;
        this.batteryTwo = batteryTwo;

    };

    driveTwo () {
        console.log(`їдемо зі швидкістю ${this.maxSpeedTwo} km на годину`);
    };
    infoTwo () {
        console.log(this);
    };
    increaseMaxSpeedTwo (newSpeed){
        this.maxSpeedTwo += newSpeed;
        console.log(newSpeed);
    };
    changeYearTwo (newValue){
        this.yearOfProductionTwo = newValue;
        console.log(newValue);
    };
    addDriverTwo (driver){
        this.driver = driver;
        console.log(driver);
    }
}

let teslaModel = new NewCar('Model 3', 'Tesla, Inc.', 2017, 261,'54 or 62 or 75 kWh (190 or 220 or 270 MJ) Lithium ion');

// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
};

let cinderellaHouse = [
    Vira = new Cinderella('Vira', 18, 30),
    Vasylyna = new Cinderella('Vasylyna', 21, 31),
    Hrystyna = new Cinderella('Hrystyna', 19, 41),
    Nastya = new Cinderella('Nastya', 39, 32),
    Ksye = new Cinderella('Ksye', 24, 37),
    Nadia = new Cinderella('Nadia', 20, 33),
    Uliana = new Cinderella('Uliana', 26, 35),
    Olena = new Cinderella('Olena', 25, 34),
    Diana = new Cinderella('Diana', 28, 36),
    Yasja = new Cinderella('Yasja', 22, 40),
];

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let jason = new Prince('Jason', 26, 40);

for (const cinderella of cinderellaHouse) {
    if (cinderella.size === jason.shoe){
        console.log(`Принц ${jason.name} знайшов свою принцесу, то є - ${cinderella.name}`)
    };
};



// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function CinderellaPartTwo(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
}

let cinderellaHousePartTwo = [
    Vira = new Cinderella('Vira', 46, 30),
    Vasylyna = new Cinderella('Vasylyna', 21, 31),
    Hrystyna = new Cinderella('Hrystyna', 19, 41),
    Nastya = new Cinderella('Nastya', 39, 32),
    Ksye = new Cinderella('Ksye', 24, 37),
    Nadia = new Cinderella('Nadia', 20, 33),
    Uliana = new Cinderella('Uliana', 26, 35),
    Olena = new Cinderella('Olena', 25, 34),
    Diana = new Cinderella('Diana', 28, 36),
    Yasja = new Cinderella('Yasja', 22, 40),
];

function PrincePartTwo(name, age, shoe, search) {
    this.name = name;
    this.age = age;
    this.shoe = shoe;
    this.search = function () {
        for (const cinderella of cinderellaHousePartTwo) {
            if (cinderella.size === this.shoe){
                console.log(`Принц ${this.name} знайшов свою принцесу, то є - ${cinderella.name}`)
            }
        }

    }
}

let andrew = new PrincePartTwo('Andrew', 26, 40);
let max = new PrincePartTwo('Max', 24, 37);

andrew.search();
max.search();