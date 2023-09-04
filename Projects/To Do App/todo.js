const form = document.querySelector('#add');
const input = document.querySelector('#item');
const itemList = document.querySelector('#item-list')


// form.addEventListener('i', function(e) {
//     console.log('Clicked the button ');
//     document.createElement('ul li');
// });
itemList.addEventListener('click', function(e) {
if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();  
    e.target.parentElement.linethrough();
}
else if (e.target.tagName === 'LI') {
    e.target.classList.add('line')
    const linethrough = document.getElementById('LI');
    
    linethrough.classList.add('line-through');
};
});

// form.addEventListener('click', function (clicking) {cclick.target.className == ''});

function markAsCompleted(element) {
    element.classList.toggle('completed');
  };
  

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(input.value);
    const newItem = document.createElement('li');
    const remove = document.createElement('button');
    const lineThrough = document.createElement('button');
    remove.innerText = 'Remove';
    newItem.innerText = input.value;
    newItem.appendChild(remove);
    itemList.appendChild(newItem);
    input.value = '';
});

