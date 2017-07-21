const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');
const addItemButton = document.querySelector('button.addItemButton');
const addItemInput = document.querySelector('input.addItemInput');
const listUl = listDiv.querySelector('ul');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');
// create constant to add the buttons in the existing list
const lis = listUl.children;


// Create a function to add dynamic buttons up, down and remove

// li is the parameter

function attachListButtons (li){
let up = document.createElement('button'); // add button
 up.className = 'up'; // defines the class Up
  up.textContent = 'Up';
  li.appendChild(up); // append it
  
  let down = document.createElement('button'); // add button
 down.className = 'down'; // defines the class Down
  down.textContent = 'Down';
  li.appendChild(down); // append it
  
    let remove = document.createElement('button'); // add button
 remove.className = 'remove'; // defines the class Down
  remove.textContent = 'Remove';
  li.appendChild(remove); // append it
}



// loop the function to add the buttons
for (let i=0; i < lis.length; i+= 1){
attachListButtons(lis[i]);
}



listUl.addEventListener('click', (e) =>{
if (event.target.tagName == 'BUTTON') {
  if(e.target.className == 'remove') {
  
let li = event.target.parentNode;
  let ul = li.parentNode;
  ul.removeChild(li);
    }
  if(e.target.className == 'up'){
    let li = event.target.parentNode;
    let prevLi = li.previousElementSibling;
    let ul = li.parentNode;
    if(prevLi){
  ul.insertBefore(li,prevLi);
    }
  }
  
  if(e.target.className == 'down'){
    let li = event.target.parentNode;
  let nextLi = li.nextElementSibling;
    let ul = li.parentNode;
    if(nextLi){
    ul.insertBefore(li, nextLi.nextSibling);
    }
  }
}
});



button.addEventListener('click', () => {
                         
                        if (list.style.display == 'none') {
                        toggleList.textContent = 'Hide list';
                        list.style.display = 'block';
                          }
                      else {
                      toggleList.textContent = 'Show list';
                       list.style.display = 'none';
                      }
                        });
                        


// call function in the new list item
 addItemButton.addEventListener('click', () => {
          let ul = document.getElementsByTagName('ul')[0];   
          let li = document.createElement('li');
          li.textContent = addItemInput.value;
                   attachListButtons(li);
                  ul.appendChild(li);
        addItemInput.value='';
                                });


  removeItemButton.addEventListener('click', () => {
                   let ul = document.getElementsByTagName('ul')[0];
              let li = document.querySelector('li:last-child');
                    ul.removeChild(li);
          
                                 });           
             

