// task {
//   id {
//     type: String,
//     required: true
//   },
//   title {
//     type: String,
//     required: true
//   },
//   text {
//     type: String,
//     required: false
//   }
// }

(function () {
  let storage = {
    todo: []
  };

  const table = document.querySelector('.table tbody');
  const form = document.querySelector('form');
  const title = document.querySelector('input[name=title]');
  const text = document.querySelector('input[name=text]');
  const alertContainer = document.querySelector('.container');


  form.addEventListener('submit', function(event){
    event.preventDefault();

    console.log(event.target);

    if (title.value == '') {
      console.log('title is empty');
      alertMessage('alert-danger', 'title is empty');
      return;
    }

    console.log('Title:', title.value);
    addNewToDoToStorage(title.value, text.value);
    alertMessage('alert-info', 'task added!');

    form.reset();

  })


  function generateId() {
    const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';

    for (let char of words) {
      let index = Math.floor(Math.random() * words.length);
      
      id = id + words[index];
    }
    
    return id;
  }
  console.log(generateId());

  function addNewToDoToStorage (title, text) {
    if (!title) return console.log('Введите заголовок задачи!')

    const newTask = {
      id: generateId(),
      title, //title: title,
      text: text || ''
    };

    storage.todo.push(newTask);
    addNewTodoToView(newTask);
    return storage.todo;
  }
  /**
   * Add new task to view
   * @param {Object} task 
   */
  function addNewTodoToView (task) {
    const template = toDoTemplate(task);
    table.insertAdjacentHTML('afterbegin', template);

  }

    addNewToDoToStorage('Do Homework', 'dedline: 22.08.2019 09:00');
    // addNewToDoToStorage('sleep', 'everyday');
    // addNewToDoToStorage('eat');


    console.log(storage.todo);

    function deleteTaskFromStorage (id) {

      if (!id) return console.log('No ID!!!!')

      let removedTask;

      for (let i = 0; i < storage.todo.length; i++) {
        if (storage.todo[i].id === id) {
          removedTask = storage.todo.splice(i, 1);
          break;
        }
      }

      return removedTask;
    }

    function editTaskStorage (id, title, text) {
      if (!id) return console.log('Передайте id задачи');
      
      const todoList = storage.todo;

      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === id) {
          todoList[i].title = title;
          todoList[i].text = text;
          break;
        } else {
          console.log('Не найден id');
        }
      }
        storage.todo = todoList;
    }
    
    // storage.todo[0].id = '123';

    // editTaskStorage('123', 'Edit title', 'new edited text');
    // console.log(storage.todo);

    /**
     * Create html template
     * @param {Object} task 
     */
    function toDoTemplate (task) {
      return `
        <tr data-id="${task.id}">
          <td>${task.title}</td>
          <td>${task.text}</td>
          <td>
            <i class="fas fa-trash"></i>
            <i class="fas fa-edit"></i>
          </td>
        </tr>  
      `
    }

    function alertMessage (className, message) {

      removeAlert();

      const currentAlert = alertTemplate(className, message);

      alertContainer.insertAdjacentHTML("afterbegin", currentAlert);
      setTimeout(removeAlert, 1000);

    }

    function alertTemplate (className,message) {
      return `<div class="alert ${className}">${message}</div>`;
      
    }

    function removeAlert () {

      const currentAlert = document.querySelector('.alert');
      if (currentAlert) {
        alertContainer.removeChild(currentAlert);
      }

    }
      
})();

