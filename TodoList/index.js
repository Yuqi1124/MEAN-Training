

// create list
const ls = document.querySelector('.todolist');

// functions
function AddTodoItem() {
  const li = document.createElement('li');
  const txt = document.createElement('span');
  const closebutton = document.createElement('span');
  closebutton.innerHTML = 'x';
  closebutton.classList.add('close-button');
  txt.innerHTML = document.getElementById("newtodo").value;
  li.appendChild(txt);
  li.appendChild(closebutton);
  ls.appendChild(li);

  closebutton.onclick = function() {
    var parent = this.parentElement;
    parent.style.display = "none";
  }
}

fetch('https://dummyjson.com/todos')
  .then((res) => res.json())
  .then((data) => {
    data.todos.forEach((item) => {
      const li = document.createElement('li');
      const txt = document.createElement('span');
      const closebutton = document.createElement('span');
      closebutton.innerHTML = 'x';
      closebutton.classList.add('close-button');
      txt.innerHTML = item.todo;
      li.appendChild(txt);
      li.appendChild(closebutton);
      ls.appendChild(li);

      closebutton.onclick = function() {
        var parent = this.parentElement;
        parent.style.display = "none";
      }
    });
  });

