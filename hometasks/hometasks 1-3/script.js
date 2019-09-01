 
// //Строки. Получаем первый и последний символ в строке
// let str = "some test string";

// console.log(`Строка: ${str}`);
// console.log(`-----------------------------------------`);
// console.log(`Первый символ строки ${str[0]}`);
// console.log(`Последний символ строки ${str[str.length-1]}`);
// console.log(`-----------------------------------------`);

// //Строки. Получаем первый и последний символ строки в ВЕРХНЕМ регистре

// console.log(`Первый символ строки в ВЕРХНЕМ регистре ${str[0].toUpperCase()}`);
// console.log(`Последний символ строки в ВЕРХНЕМ регистре ${str[str.length-1].toUpperCase()}`);
// console.log(`-----------------------------------------`);

// //Cтроки. Ищем положение слова 'string' в строке

// console.log(`Слово 'string' начинается с ${str.indexOf('string')} символа`);
// console.log(`-----------------------------------------`);

// //Строки. Ищем второй символ пробела

// console.log(`Второй пробел находится под индексом № ${str.lastIndexOf(" ")}`);
// console.log(`-----------------------------------------`);

// //Строки. Получаем строку с 5-го символа длиной 4 буквы

// console.log(`Строка с 5го символа, длинной 4 символа: ${str.substr(5, 4)}`);
// console.log(`-----------------------------------------`);

// //Строки. Получаем строку с 5-го по 9-й символы

// console.log(`Строка с 5го символа, по 9й: ${str.substring(5, 9)}`);
// console.log(`-----------------------------------------`);

// //Строки. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

// newStr = str.slice(0, -6 )
// console.log(`Новая строка, без 6 последних символов - ${newStr}`);
// console.log(`-----------------------------------------`);

// //Строки. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

// let a = 20;
// let b = 16;

// console.log(`Из двух числовых переменных 20 и 16 получаем строку: ${String(a) + String(b)}`);
// console.log(`-----------------------------------------`);

// //Преобразование примитивов.
// // Чему равно а, почему?

// let a1 = 0 || 'string';
// console.log(`а Равно ${a1}, потому что 0 = false, а у нас стоит знак логического ИЛИ, значит если хотя бы один из операндов является истиной, то в выражение подставится true.`);
// console.log(`-----------------------------------------`);

// let a2 = 1 && 'string';
// console.log(`а Равно ${a2}, так как стоит знак логического И. Первый аргумент - true,
//  Поэтому возвращается второй аргумент.`);
// console.log(`-----------------------------------------`);

// let a3 = null || 25;
// console.log(`а Равно ${a3} потому что null = false, а у нас стоит знак логического ИЛИ, значит если хотя бы один из операндов является истиной, то в выражение подставится значение true, 25 в нашем случае - true.`);
// console.log(`-----------------------------------------`);

// let a4 = null && 25;
// console.log(`а Равно ${a4}, Первый аргумент - false, Он и возвращается, а второй аргумент игнорируется`);
// console.log(`-----------------------------------------`);

// let a5 = null || 0 || 35;
// console.log(`а Равно ${a5}, потому что оператор ИЛИ вычисляет ровно столько значений, сколько необходимо – до первого true`);
// console.log(`-----------------------------------------`);

// let a6 = null && 0 && 35;
// console.log(`а Равно ${a6}, Первый аргумент - false, Он и возвращается, а второй и третий аргумент игнорируется`);
// console.log(`-----------------------------------------`);

// // Что отобразится в консоли. Почему?

// // 12 + 14 + '12' - в консоли отобразится строка 2612, 12 и 14 сложатся, а затем произойдёт конкатинция со строкой "12".
// // 3 + 2 - '1' - в консоли отобразится 4, потому что знак "-" преобразует последующю строку в число(если это возможно).
// // '3' + 2 - 1 - в консоли будет 31, как и в первом случая, произойдёт конкатинация строки "3" и результата вычитания 2-1.
// // true + 2  - в консоли отобразится 3, так как true равно 1.
// // +'10' + 1 -  в консоли отобразится 11, так как перед строкой "10" стоит унарный +, а это является неявным преобразованием типа.
// // undefined + 2 - в консоли отобразится тип данных NaN, почему? затрудняюсь ответить, но думаю из-за того что мы не можем складывать числа с undefined.
// // null + 5 - в консоли отобразится 5,
// // true + undefined - в консоли отобразится NaN, так как мы попытались сложить true(по сути 1(единицу)) с undefined, как в случае выше.

// //If else Задачи
// //Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

// let someVar = "hidden";

// if (someVar === "hidden") {
//  someVar = "visible";
// } else {
//  someVar = "hidden";
// }

// console.log(someVar);
// console.log(`-----------------------------------------`);

// //Используя if, записать условие:
// // если переменная равна нулю, присвоить ей 1;
// // если меньше нуля - строку “less then zero”;
// // если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

// let x = 12;

// if (x === 0) {
//   x = 1;
// } else if (x < 0) {
//   x = "less then zero";
// } else {
//   x *= 10;
// }
// console.log(x);
// console.log(`-----------------------------------------`);

// // Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// // Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

// let car = {
//   name: 'Lexus',
//   age: 10, 
//   create: 2008, 
//   needRepair: false 
// };

// if (car.age > 5) {
//   console.log('Need Repair');
//   car.needRepair = true;
// } else {
//   car.needRepair = false;
// }
// console.table(car);
// console.log(`-----------------------------------------`);

// /* Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.*/

// let item = { 
//   name: 'Intel core i7', 
//   price: '100$', 
//   discount: '15%' 
// }

// if (item.hasOwnProperty('discount') && item.discount !== "" ) {
//   // item.priceWithDiscount = 150; // при попытке создать новый ключ в объекте и вывести его в консоль, получаю ошибку: priceWithDiscount is not defined.
//   //console.log(priceWithDiscount);
//   //так же не разобрался как привести к числовому типу поля price и discount если обращаюсь к ним через item.price и item.discount 

//   item.priceWithDiscount = parseInt(item.price) - parseInt(item.discount);
  
//   console.log(`Цена со скидкой: ${item.priceWithDiscount}$`);
// } else {
//   console.log(price);
// }

// console.log(`-----------------------------------------`);

// //Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
// let product = { 
//   name: 'Яблоко', 
//   price: '10$',
// };
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// if (parseInt(product.price) >= min && parseInt(product.price) <= max) { 
//   console.log(product.name);
// } else {
//   console.log('Товаров не найдено');
// }
// console.log(`-----------------------------------------`);

// //Создать объект с полем product, равным ‘iphone’ 
// // Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
// // Добавить поле details, которое будет содержать объект с полями model и color
// // Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.
  
// const product1 = {
//   name: 'iphone'
// };

// product1.price = 1000;
// product1.currency = 'dollar';
// product1.details = {
//   model: 'X'
// };
// product1.details.color = 'Rose Gold';

// console.table(product1);
// console.log(`-----------------------------------------`);

// // Записать в виде switch case следующее условие:
// // if (a === ‘block’) { console.log(‘block’)
// // } else if (a === ‘none’) { console.log(‘none’)
// // } else if (a === ‘inline’) { console.log(‘inline’)
// // } else { console.log(‘other’)
// // }
// // Записать условие, используя конструктор switch. В консоли должно отразиться только одно
// // значение.
// let a7 = 'block';

// switch (a7) {
//   case 'block': console.log('block');
//   break;
//   case 'none': console.log('none');
//   break;
//   case 'inline': console.log('inline');
//   break;
//   default: console.log('other');
// }
// console.log(`-----------------------------------------`);

// //Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.

// //#1
// /*Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

// let someVar = "hidden";

// if (someVar === "hidden") {
//  someVar = "visible";
// } else {
//  someVar = "hidden";
// }
// */

// (someVar === 'hidden') ? someVar = 'visible' : someVar = 'hidden';
// console.log(someVar);
// console.log(`-----------------------------------------`);

// //#2
// /* /Используя if, записать условие:
// // если переменная равна нулю, присвоить ей 1;
// // если меньше нуля - строку “less then zero”;
// // если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

// let x = 12;

// if (x === 0) {
//   x = 1;
// } else if (x < 0) {
//   x = "less then zero";
// } else {
//   x *= 10;
// }
//  */

// (x === 0) ? x = 1 :
// (x < 0) ? x = 'less then zero' : x *= 10 ;
// console.log(x); //1200 потому что выше уже х был умножен на 10
// console.log(`-----------------------------------------`);


// //#3
// /* Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// // Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

// let car = {
//   name: 'Lexus',
//   age: 10, 
//   create: 2008, 
//   needRepair: false 
// };

// if (car.age > 5) {
//   console.log('Need Repair');
//   car.needRepair = true;
// } else {
//   car.needRepair = false;
// }
// */

// (car.age > 5) ? car.needRepair = true : car.needRepair = false;

// console.table(car);
// console.log(`-----------------------------------------`);

// // Циклы. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

// let string = 'i am in the easycode';
// let newString = '';

// for (let i = 0; i < string.length; i++) {
//   if (i === 0) {
//     newString += string[i].toUpperCase();
//   } else if (string[i - 1] === ' ') {
//     newString += string[i].toUpperCase();
//   } else {
//     newString += string[i];
//   }
// }
// console.log(newString);
// console.log(`-----------------------------------------`);

// //Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

// let bestString = 'tseb eht ma i';
// let i = bestString.length;
// let revString = '';

// // for (let i = bestString.length - 1; i >= 0; i--) {
// //   revString += bestString[i];
// // }
// // console.log(revString);
// // console.log(`-----------------------------------------`);

// while (i--) {
// revString += bestString[i];
// }
// console.log(revString);
// console.log(`-----------------------------------------`);

// //Факториал числа - произведение всех натуральных чисел от 1 до n
// // включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

// let num = 10;
 
// for (let i = num; i > 0; i--) {
//   num *= i;
// }
// console.log(num);
// console.log(`-----------------------------------------`);

// // //На основе строки “JavaScript is a pretty good language” сделать новую строку,
// // где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

// let jsPretty = 'JavaScript is a pretty good language';
// let resStr;

// for (let i = 0; i < jsPretty.length; i++) {
//   if (i === 0) {
//     resStr = jsPretty[i].toUpperCase();
//   } else if (jsPretty[i - 1] == " ") {
//     resStr += jsPretty[i].toUpperCase();
//   } else {
//     resStr += jsPretty[i];
//   }
// }
// resStr = resStr.replace(/\s/g, '');
 
// console.log(resStr);
// console.log(`-----------------------------------------`);

// //Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let i of arr) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }
// console.log(`-----------------------------------------`);

// //Дан объект:
// // let list = {
// //   name: ‘denis’, work: ‘easycode’, age: 29
// //   }
// //   Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

// let list = {
//     name: 'denis',
//     work: 'easycode',
//     age: 29
// }

// for (let key in list) {
//   if (typeof list[key] === 'string') {
//     list[key] = list[key].toUpperCase();
//   }
// }
// console.table(list);
// console.log(`-----------------------------------------`);


//HomeWork #2

//# Функции

// 1. Создать функцию `multiply`, которая будет принимать любое количество чисел и возвращать их произведение: `multiply(1,2,3) = 6 (1*2*3)`

// * Если нет ни одного аргумента, вернуть ноль: `multiply() // 0`

function multiply(...args) {
  if (args.length == 0) {
    return 0;
  } else {
  let resMult = 1;
  for (let arg of args) {
    resMult *= arg; 
 }
    return resMult;
}
}

console.log(multiply(2, 2, 2));
console.log(`-----------------------------------------`);

//2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: `reverseString(‘test’) // “tset”`.

function reverseString (str) {
  let i = str.length;
  let newStr1 = '';
  while (i--) {
    newStr1 += str[i];
    }
    return newStr1;
}

console.log(reverseString('tset'));
console.log(`-----------------------------------------`);

/*3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: 

`getCodeStringFromText(‘hello’) // “104 101 108 108 111” `

* подсказка: для получения кода используйте специальный метод */

function getCodeStringFromText (str) {
  let newStr = "";
    let strWithSpaces = str.split("");
        for (let i = 0; i < strWithSpaces.length; i++) {
          newStr += str.charCodeAt(i) + " ";
        }
  return newStr;
}
console.log(getCodeStringFromText('hello'));
console.log(`-----------------------------------------`);

/* 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.*/

function guessNum (num) {
  if (num > 0 && num < 10) {
    let rndm = Math.round(Math.random() * 10); 
    if (num === rndm) {
      console.log (`Вы выиграли`);
    } else {
      console.log(`Вы не угадали ваше число ${num}, а выпало число ${rndm}`);
    }
  } else {
    console.log(`Вы ввели не верное число, введите число от 0 до 10`);
  }
  
}
guessNum(5);
console.log(`-----------------------------------------`);

/*5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: `getArray(10); // [1,2,3,4,5,6,7,8,9,10]` */

function getArray (num) {
  let arr1 = [];
  for (let i = 1; i <=num; i++) {
    arr1.push(i);  
  }
  return arr1;
}

console.log(getArray(10));
console.log(`-----------------------------------------`);

/*6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
`doubleArray([1,2,3]) // [1,2,3,1,2,3]` */

function dubleArray (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray.concat(array);
}
console.log(dubleArray([1, 2, 3]));
console.log(`-----------------------------------------`);

/*7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: 
`changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.` */

function changeCollection(...arrays) {

  for (let i = 0; i < arrays.length; i++) {
      arrays[i].shift();
    }
  
  return arrays;
}

console.log(changeCollection([1, 2, 3], ['a', 'b', 'c'], [4, 5, 'g']));
console.log(`-----------------------------------------`);

// // /*8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

// `funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]` */

function funcGetUsers (users, prop, value) {
  if (!users === '' && !prop === '' && !value === '') {
    return newArray = [];
  }
}




//Домашка № 3

/*# Задание 1
дана разметка:
```html
<html>
<head></head>
<body>
    <div>
        <p>Text</p>
        <p>Other</p>
        <p>Next</p>
        <p>Last</p>
    </div>
    <div></div>
    <div></div>
</body>
</html>
```

Зная структуру html, с помощью изученных
методов получить (в консоль):
1. head */

 console.log(document.head);
 console.log(`-----------------------------------------`);

 //2. body
 console.log(document.body);
 console.log(`-----------------------------------------`);

 //3. все дочерние элементы body и вывести их в консоль.
 console.log(document.body.children);
 console.log(`-----------------------------------------`);

//  4. первый div и все его дочерние узлы
//  а) вывести все дочерние узлы в консоль
 console.log(document.body.firstElementChild);
 console.log(`-----------------------------------------`);

//б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы

let firstDiv = document.body.firstElementChild;

function getAllChildsExceptFirsrAndLast () {
    for (let i = 1; i < firstDiv.children.length -1; i++) {
      console.log(firstDiv.children[i]);
    }
  
  return firstDiv.children;
}

getAllChildsExceptFirsrAndLast(firstDiv);
console.log(`-----------------------------------------`);


/*# Задание 2
Разметка для задач
```html
<div>
  <article>
    <p>Lorem ipsum dolor sit amet, odio omnesque ius cu, quo ex atqui antiopam. At detracto menandri eos. Duo in causae viderer, graeci <a href="#">reprehendunt</a> has in. Decore <mark>nemore</mark> philosophia te pro, nobis legere causae ex mei, odio putant mentitum ea ius. Vix nostro deserunt explicari eu.</p>
  </article>
</div>
<ul>
  <li><a href="#">Link1</a></li>
  <li><a href="#">Link2</a></li>
  <li><a href="#">Link3</a></li>
  <li><a href="#">Link4</a></li>
</ul><span></span>
<a href="#">Some link</a>
```

1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

```javascript
isParent(parent, child);
isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark

isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark
```
> Функция принимает только DOM объекты. */
/**
 * Раскоментируй решение ниже и в файле index.html кусок кода с названием Разметка для задачи 1
 */

// let ul1 = document.querySelector('ul');
// let li1 = document.querySelector('li');
// function isParent (parent, child) {
//   if (child.parentElement === parent ) {
//     return true;
//   } else if (parent.parentElement === child) {
//     return false;
//   }
// }
// console.log(isParent(ul1, li1));
// console.log(`-----------------------------------------`);

/*2. Получить список всех ссылок, которые не находятся внутри списка ul */

let links = Array.from(document.querySelectorAll('a')).filter(link => !link.closest('ul'));
console.log(links);
console.log(`-----------------------------------------`);

/*3. Найти элемент, который находится перед и после списка ul */

/**
 * Раскоментируй решение ниже и в файле index.html кусок кода с названием Разметка для задачи 2
 */
// let ul3 = document.querySelector('ul');

// let prevElem = ul3.previousElementSibling;
// let nextElem = ul3.nextElementSibling;

// console.log(`Предыдущий элемент ${prevElem}, следующий элемент  ${nextElem}`);
console.log(`-----------------------------------------`);



