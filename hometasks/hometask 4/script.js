// 1. Найти параграф и получить его текстовое содержимое (только текст!)

let text = document.querySelector('p');
console.log(text.textContent);
console.log('----------------------------------------------');

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

let infoObj = {};
function getInfo (node) {
  let param = document.querySelector(node);
  infoObj.nodeType = param.nodeType;
  infoObj.name = param.nodeName;
  if (param.childNodes === '') {
    infoObj.childs = 0;
  } else {
    infoObj.childs = param.childNodes;
  }
  console.log(infoObj);
}

getInfo('div');
console.log('----------------------------------------------');

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: `getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]`

let textUl = document.querySelector('ul');
let resArr = [];

function getTextFromUl (list) {
  let text = textUl.innerText;
  resArr = text.split('\n');
  console.log(resArr);
}

getTextFromUl(textUl);
console.log('----------------------------------------------');


// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// `-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-`

let textToChange = document.querySelector('p');
let arr = textToChange.childNodes;
console.log(arr);

for (let i = 0; i < arr.length; i++) {

  if (arr[i].nodeType === 3) {
    arr[i].textContent = '-text-';
  } 
}

console.log(textToChange);
console.log('----------------------------------------------');

/**
//  * # Атрибуты

// 1. Найти в коде список `ul` и добавить класс `“list”`

// > Код для задач брать с задач по Совйствам.
//  */

const uList = document.querySelector('ul');
uList.classList.add ('list');
console.log(uList);
console.log('----------------------------------------------');


// // //2. Найти в коде ссылку, находящуюся после списка `ul`, и добавить `id=link`

//не знаю как решить задачу, понимаю как найти следующий элемент после списка, nextSibling'ом, но следующий у нас span, а не ссылка. 
console.log('----------------------------------------------');


// // 3. На `li` через один (начиная с самого первого) установить класс `“item”`

let liList = document.querySelectorAll('li');

  for (let i = 0; i < liList.length; i+=2) {
    liList[i].classList.add('item');
  }

console.log(liList);
console.log('----------------------------------------------');

// // 4. На все ссылки в примере установить класс `“custom-link”`

const links = document.querySelectorAll('a');

for (let i = 0; i < links.length; i++) {
links[i].classList.add ('custom-link');
}
console.log(links);
console.log('----------------------------------------------');


// //# Манипуляция DOM
// /**
// 1. Не используя innerHTML, добавить в список несколько `li` с классом `‘new-item’` и текстом `‘item’` + номер `li`:
// ```html
// <ul>
//   <li><a href="#">Link1</a></li>
//   ...
//   <li class=”new-item”>item 5</li>
//   <li class=”new-item”>item 6</li>
// </ul>
// ```
// Вручную номер `li` не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.  */

let myUl = document.querySelector('ul');
let myLi = document.querySelectorAll('li');

function createNewLi () {

  // let newLi = document.createElement('li');
  // newLi.classList.add('new-item');
  // newLi.innerText = `item ${myLi.length + 1}`;
  // myUl.append(newLi);

  myUl.insertAdjacentHTML('beforeend', `
    <li class='new-item'>item ${myLi.length + 1}</li>
  `);
  console.log(myLi);
}

createNewLi();
createNewLi(); // не добавляет новую лишку в псевдомассив Лишек имеющихся на странице, не понимаю как это сделать

console.log('----------------------------------------------');

/**2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу `strong` (в каждую ссылку один - `strong`). */

const allLinksInLi = document.querySelectorAll('li a');

allLinksInLi.forEach(function(item) {

  item.insertAdjacentHTML('beforeend', `<strong> test</strong>`);

});
console.log(allLinksInLi);
console.log('----------------------------------------------');


/*
3. В начало документа (в начало `body`) добавить картинку `img` с атрибутами `src` и `alt` (текст придумайте сами). В `src` добавьте реальный `url` к картинке. Для создания элемента используйте метод `createElement`. */

const newImg = document.createElement('img');
document.body.appendChild(newImg);
newImg.setAtribute('src', 'https://unsplash.com/photos/m3R_31SEM_U');
console.log(newImg);


/*
4. Найти на странице элемент `mark`, добавить в конец содержимого текст `“green”` и на элемент установить класс green
5. Отсортировать `li` внутри списка в обратном порядке (по тексту внутри)

> Код для задач брать с задач по Свойствам.

6. Дан массив пользователей, его можно скопировать [отсюда](https://www.notion.so/8e2b70ab692a4986b1816ce7dd2fb1ca), создать таблицу (см. презентацию).

Условия:
* В конце таблицы обязательно последняя `tr` должна содержать `total balance` всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю. 
* Количество пользователей может быть любым.
* Таблица и все ее содержимое должно создаваться через `js`, в разметке у вас может быть только контейнер какой то.
* В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков `th` которые будут выводиться в таблице. Что то типа `{ name: ‘Name’, email: ‘Email’... }` соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок `th`.
 */
