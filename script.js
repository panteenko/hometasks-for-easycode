//Строки. Получаем первый и последний символ в строке
let str = "some test string";

console.log(`Строка: ${str}`);
console.log(`-----------------------------------------`);
console.log(`Первый символ строки ${str[0]}`);
console.log(`Последний символ строки ${str[str.length-1]}`);
console.log(`-----------------------------------------`);

//Строки. Получаем первый и последний символ строки в ВЕРХНЕМ регистре

console.log(`Первый символ строки в ВЕРХНЕМ регистре ${str[0].toUpperCase()}`);
console.log(`Последний символ строки в ВЕРХНЕМ регистре ${str[str.length-1].toUpperCase()}`);
console.log(`-----------------------------------------`);

//Cтроки. Ищем положение слова 'string' в строке

console.log(`Слово 'string' начинается с ${str.indexOf('string')} символа`);
console.log(`-----------------------------------------`);

//Строки. Ищем второй символ пробела

console.log(`Второй пробел находится под индексом № ${str.lastIndexOf(" ")}`);
console.log(`-----------------------------------------`);

//Строки. Получаем строку с 5-го символа длиной 4 буквы

console.log(`Строка с 5го символа, длинной 4 символа: ${str.substr(5, 4)}`);
console.log(`-----------------------------------------`);

//Строки. Получаем строку с 5-го по 9-й символы

console.log(`Строка с 5го символа, по 9й: ${str.substring(5, 9)}`);
console.log(`-----------------------------------------`);

//Строки. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

newStr = str.slice(0, -6 )
console.log(`Новая строка, без 6 последних символов - ${newStr}`);
console.log(`-----------------------------------------`);

//Строки. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

let a = 20;
let b = 16;

console.log(`Из двух числовых переменных 20 и 16 получаем строку: ${String(a) + String(b)}`);
console.log(`-----------------------------------------`);

//Преобразование примитивов.
// Чему равно а, почему?

let a1 = 0 || 'string';
console.log(`а Равно ${a1}, потому что 0 = false, а у нас стоит знак логического ИЛИ, значит если хотя бы один из операндов является истиной, то в выражение подставится true.`);
console.log(`-----------------------------------------`);

let a2 = 1 && 'string';
console.log(`а Равно ${a2}, так как стоит знак логического И. Первый аргумент - true,
 Поэтому возвращается второй аргумент.`);
console.log(`-----------------------------------------`);

let a3 = null || 25;
console.log(`а Равно ${a3} потому что null = false, а у нас стоит знак логического ИЛИ, значит если хотя бы один из операндов является истиной, то в выражение подставится значение true, 25 в нашем случае - true.`);
console.log(`-----------------------------------------`);

let a4 = null && 25;
console.log(`а Равно ${a4}, Первый аргумент - false, Он и возвращается, а второй аргумент игнорируется`);
console.log(`-----------------------------------------`);

let a5 = null || 0 || 35;
console.log(`а Равно ${a5}, потому что оператор ИЛИ вычисляет ровно столько значений, сколько необходимо – до первого true`);
console.log(`-----------------------------------------`);

let a6 = null && 0 && 35;
console.log(`а Равно ${a6}, Первый аргумент - false, Он и возвращается, а второй и третий аргумент игнорируется`);
console.log(`-----------------------------------------`);

// Что отобразится в консоли. Почему?

// 12 + 14 + '12' - в консоли отобразится строка 2612, 12 и 14 сложатся, а затем произойдёт конкатинция со строкой "12".
// 3 + 2 - '1' - в консоли отобразится 4, потому что знак "-" преобразует последующю строку в число(если это возможно).
// '3' + 2 - 1 - в консоли будет 31, как и в первом случая, произойдёт конкатинация строки "3" и результата вычитания 2-1.
// true + 2  - в консоли отобразится 3, так как true равно 1.
// +'10' + 1 -  в консоли отобразится 11, так как перед строкой "10" стоит унарный +, а это является неявным преобразованием типа.
// undefined + 2 - в консоли отобразится тип данных NaN, почему? затрудняюсь ответить, но думаю из-за того что мы не можем складывать числа с undefined.
// null + 5 - в консоли отобразится 5,
// true + undefined - в консоли отобразится NaN, так как мы попытались сложить true(по сути 1(единицу)) с undefined, как в случае выше.

//If else Задачи
//Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let someVar = "hidden";

if (someVar === "hidden") {
 someVar = "visible";
} else {
 someVar = "hidden";
}

console.log(someVar);
console.log(`-----------------------------------------`);

//Используя if, записать условие:
// если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let x = 12;

if (x === 0) {
  x = 1;
} else if (x < 0) {
  x = "less then zero";
} else {
  x *= 10;
}
console.log(x);
console.log(`-----------------------------------------`);

// Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
  name: 'Lexus',
  age: 10, 
  create: 2008, 
  needRepair: false 
};

if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}
console.table(car);
console.log(`-----------------------------------------`);

/* Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.*/

let item = { 
  name: 'Intel core i7', 
  price: '100$', 
  discount: '15%' 
}

if (item.hasOwnProperty('discount') && item.discount !== "" ) {
  // item.priceWithDiscount = 150; // при попытке создать новый ключ в объекте и вывести его в консоль, получаю ошибку: priceWithDiscount is not defined.
  //console.log(priceWithDiscount);
  //так же не разобрался как привести к числовому типу поля price и discount если обращаюсь к ним через item.price и item.discount 

  item.priceWithDiscount = parseInt(item.price) - parseInt(item.discount);
  
  console.log(`Цена со скидкой: ${item.priceWithDiscount}$`);
} else {
  console.log(price);
}

console.log(`-----------------------------------------`);

//Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
let product = { 
  name: 'Яблоко', 
  price: '10$',
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseInt(product.price) >= min && parseInt(product.price) <= max) { 
  console.log(product.name);
} else {
  console.log('Товаров не найдено');
}
console.log(`-----------------------------------------`);

//Создать объект с полем product, равным ‘iphone’ 
// Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
// Добавить поле details, которое будет содержать объект с полями model и color
// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.
  
const product1 = {
  name: 'iphone'
};

product1.price = 1000;
product1.currency = 'dollar';
product1.details = {
  model: 'X'
};
product1.details.color = 'Rose Gold';

console.table(product1);
console.log(`-----------------------------------------`);

// Записать в виде switch case следующее условие:
// if (a === ‘block’) { console.log(‘block’)
// } else if (a === ‘none’) { console.log(‘none’)
// } else if (a === ‘inline’) { console.log(‘inline’)
// } else { console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно
// значение.
let a7 = 'block';

switch (a7) {
  case 'block': console.log('block');
  break;
  case 'none': console.log('none');
  break;
  case 'inline': console.log('inline');
  break;
  default: console.log('other');
}
console.log(`-----------------------------------------`);

//Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.

//#1
/*Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let someVar = "hidden";

if (someVar === "hidden") {
 someVar = "visible";
} else {
 someVar = "hidden";
}
*/

(someVar === 'hidden') ? someVar = 'visible' : someVar = 'hidden';
console.log(someVar);
console.log(`-----------------------------------------`);

//#2
/* /Используя if, записать условие:
// если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let x = 12;

if (x === 0) {
  x = 1;
} else if (x < 0) {
  x = "less then zero";
} else {
  x *= 10;
}
 */

(x === 0) ? x = 1 :
(x < 0) ? x = 'less then zero' : x *= 10 ;
console.log(x); //1200 потому что выше уже х был умножен на 10
console.log(`-----------------------------------------`);


//#3
/* Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
  name: 'Lexus',
  age: 10, 
  create: 2008, 
  needRepair: false 
};

if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}
*/

(car.age > 5) ? car.needRepair = true : car.needRepair = false;

console.table(car);
console.log(`-----------------------------------------`);

// Циклы. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

let string = 'i am in the easycode'; //Получилось решить задачу, только добавив пробел перед первым символом
let newString = '';

for (let i = 0; i < string.length; i++) {
  if (i === 0) {
    newString += string[i].toUpperCase();
  } else if (string[i - 1] === ' ') {
    newString += string[i].toUpperCase();
  } else {
    newString += string[i];
  }
}
console.log(newString);
console.log(`-----------------------------------------`);

//Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let bestString = 'tseb eht ma i';
let i = bestString.length;
let revString = '';

// for (let i = bestString.length - 1; i >= 0; i--) {
//   revString += bestString[i];
// }
// console.log(revString);
// console.log(`-----------------------------------------`);

while (i--) {
revString += bestString[i];
}
console.log(revString);
console.log(`-----------------------------------------`);

//Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

let num = 10;
// let fact;
 
for (let i = num; i > 0; i--) {
  num *= i;
}
console.log(num);