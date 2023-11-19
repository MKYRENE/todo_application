// Store some references to my elements
var inputEl = document.querySelector('#todo-input');
var addBtn = document.querySelector('#add-btn');
var output = document.querySelector('#todo-output');


// Create a function that gets the todos from localStorage
function getTodos() {
  // Retrieve the array/null of todos from localStorage
  var todos = localStorage.getItem('todos');
  // Parse the JSON string
  var parsed = JSON.parse(todos);

  // if the value is null; return the parsed value to an empty array.
  return parsed || [];
}

// Create a function that stores a new todo to the todos in localStorage
function addTodo() {
  // Old todos variable return value will be reference by this new todos var inside addTodo Function.
  var todos = getTodos();
  // Get the text that was inputted
  var todoText = inputEl.value;
  // add to the end (Push) the text to the old array
  todos.push(todoText);
  // Replace the old array in localStorage with the new array and convert it to JSON
  localStorage.setItem('todos', JSON.stringify(todos));

  // Show the newly updated todos in the DOM
  showTodos();
}

// Create a function that shows the todos on the page
function showTodos() {
  // Retrieve the todos
  var todos = getTodos();

  // Clear the ul
  output.innerHTML = '';

  // If the array is empty, output a paragraph that says "No todos have been added."
  if (todos.length === 0) {
    //referencing and creating new p element in js
    var p = document.createElement('p');
    //creating p element in JS
    p.innerText = 'No todos have been added.';
    //putting the p element into the window after being created in JS (DOM)
    output.append(p);
  }

  // Loop over the array of todos and output an li into the ul for each todo
  for (var i = 0; i < todos.length; i++) {
    var todoStr = todos[i];

    // Create an li element in JS
    var li = document.createElement('li');

    // Set the li's innerText to the todoStr
    li.innerText = todoStr;

    // Output the li to the ul at the top inside
    output.prepend(li);
  }
}

// Initial tasks or processes

// Show all todos that have been stored
showTodos();

// Add event listener to our Add Todo button
addBtn.addEventListener('click', addTodo);