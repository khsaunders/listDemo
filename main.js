console.log('connected');


var addButton = document.getElementById('addItem');

//this function is triggered by an event listener (in this case a click)
addButton.addEventListener('click', function addToDos() {

//take value of what is typed in text input using .value method
  var newItem = document.getElementById('enterItem').value;

//creating a variable of what HTML element we want to target
  var list = document.getElementById('listItems');

//creates place for text to go in newly created li elements
  var textNode = document.createTextNode(newItem);

//creates list items where there were no list items before
  var added = document.createElement('li');

//turning value from newItem into text node --unfortunately, we will get a typeError if we don't create a new node
  var t = document.createTextNode(newItem);

//appending text node content to li
  added.appendChild(t);

  //appending these items to our HTML element "listItems" (list being previously defined variable);
  list.appendChild(added);

//clear text box upon clicking 'add item'
  document.getElementById('enterItem').value = ' ';
  });
