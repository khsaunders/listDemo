console.log('connected');

/*---------------------------------------ADD ITEM TO LIST-----------------------------------------*/

var addButton = document.getElementById('addItem');

//event listener to trigger function (in this case a click);
addButton.addEventListener('click', function addToDos() {

//take value of what is typed in text input using .value method;
  var newItem = document.getElementById('enterItem').value;

//create a variable of what HTML element we want to target (like a container);
  var list = document.getElementById('listItems');

//create list items where there were no list items before;
  var added = document.createElement('li');

//create place for text to go in newly created li elements;
  var textNode = document.createTextNode(newItem);

//turn value from newItem into text node --unfortunately, we will get a typeError if we don't create a new node;
  var t = document.createTextNode(newItem);

  var newBtn = document.createElement('button');

  //assign id to new delete buttons
  newBtn.id = 'deleteBtn';

  var deleteText = newBtn.innerHTML = 'delete';

  console.log(added, newBtn);

  //this line provided by stack overflow user T.J. here: https://stackoverflow.com/posts/34896387/revisions
  //they provide code based on event delegation
  document.addEventListener('click',function(e){

     if(e.target && e.target.id== 'deleteBtn'){
       console.log('delete click');
       this.style('display', 'none');
  }
});

//append text node content to li;
  added.appendChild(t);

  //append these items to our HTML element "listItems" (list being previously defined variable);
  list.appendChild(added);

//append delete button with each li. crafted from vars newBtn and deleteText
  list.appendChild(newBtn);

//clear text box upon clicking 'add item';
  document.getElementById('enterItem').value = ' ';


/*---------------------------------------DELETE ITEM FROM LIST-----------------------------------------*/

  //i want a delete button for each list item that triggers a modal pop up for asking user if they want to delete;

});
