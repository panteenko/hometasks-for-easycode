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
    }

    storage.todo.push(newTask)

    return storage.todo;
  }

    addNewToDoToStorage('Do Homework', 'dedline: 22.08.2019 09:00');
    addNewToDoToStorage('sleep', 'everyday');
    addNewToDoToStorage('eat');

    console.log(storage);
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

})();

