console.log('Lesson 5: events');
const btn = document.querySelector('.btn');
const body = document.body;

function handler1 (event) {
  event.preventDefault();
  console.log('click 1');
  console.log(event);
}

function handler2 (event) {
  event.preventDefault();
  console.log('click 2');

}

btn.addEventListener('click', handler1);
btn.addEventListener('click', handler2);
body.addEventListener('click', handler1);
