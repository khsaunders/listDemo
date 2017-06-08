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

  //append text node content to li;
    added.appendChild(t);

    //append these items to our HTML element "listItems" (list being previously defined variable);
    list.appendChild(added);
    added.id='newLi'

  //clear text box upon clicking 'add item';
    document.getElementById('enterItem').value = ' ';

/*------------------------------------DELETE ITEM FROM LIST-----------------------------------------*/

//notice this is still within original function

  //targeting document as a whole and then...
  document.addEventListener('click',function(e){

//...verifying if target has desired id;
//idea provided by stack overflow user T.J. here: https://stackoverflow.com/posts/34896387/revisions
     if(e.target && e.target.id== 'newLi'){
       // ...if so, do the following...
       console.log('delete click');
       //e.target means that it will only remove that specific li instead of allllll the li's
       e.target.remove(t);
  }
});


});
