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


textToChange.firstChild.data = "-text-";
textToChange.lastChild.data = "-text-";


console.log(textToChange);
console.log('----------------------------------------------');

/**
 * # Атрибуты

1. Найти в коде список `ul` и добавить класс `“list”`

> Код для задач брать с задач по Совйствам.
 */

const uList = document.querySelector('ul');
  uList.classList.add ('list');
console.log(uList);
console.log('----------------------------------------------');


// //2. Найти в коде ссылку, находящуюся после списка `ul`, и добавить `id=link`

console.log('----------------------------------------------');


// 3. На `li` через один (начиная с самого первого) установить класс `“item”`

let liList = document.querySelectorAll('li');

  for (let i = 0; i < liList.length; i+=2) {
    liList[i].classList.add('item');
  }


console.log(liList);
console.log('----------------------------------------------');

// 4. На все ссылки в примере установить класс `“custom-link”`

const links = document.querySelectorAll('a');

for (let i = 0; i < links.length; i++) {
links[i].classList.add ('custom-link');
}

console.log(links);
console.log('----------------------------------------------');