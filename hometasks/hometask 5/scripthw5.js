// # События. 
// 1. По нажатию на кнопку `"btn-msg"` должен появиться алерт с тем текстом который находится в атрибуте `data-text` у кнопки.

const btnMsg = document.querySelector('button#btn-msg');

function alertMsg () {

  alert(btnMsg.dataset.text);

}
btnMsg.addEventListener('click', alertMsg);


// 2. При наведении указателя мыши на `"btn-msg"`, кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

const btnMsg2 = document.querySelector('button#btn-msg');

function changeColor () {

  btnMsg2.classList.add('red-btn');

}

function changeColorBack () {

  btnMsg2.classList.remove('red-btn')

}


btnMsg2.addEventListener('mouseover', changeColor);
btnMsg2.addEventListener('mouseout', changeColorBack);


// 3. При нажатии на любой узел документа показать в элементе с `id=tag` имя тега нажатого элемента.

const myTag = document.getElementById('tag');

function showTagName (event) {

  let currentTag = document.createElement('span');
  currentTag = event.target.nodeName;
  myTag.textContent += ` ${currentTag} `;

}

document.addEventListener('click', showTagName);


// 4. При нажатии на кнопку `btn-generate` добавлять в список `ul` элемент списка `Li` с текстом `Item` + порядковый номер `Li` по списку, т.е `Item 3`, `Item 4` и т.д 

const btnGen = document.getElementById('btn-generate');

function createNewLi () {

  let myUl = document.querySelector('ul');
  let myLi = document.querySelectorAll('li');
  let newLi = document.createElement('li');
  newLi.innerText = `Item ${myLi.length + 1}`;
  myUl.appendChild(newLi);

}

btnGen.addEventListener('click', createNewLi);

