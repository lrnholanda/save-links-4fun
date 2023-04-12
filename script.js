let myList = [];
const saveBtn = document.getElementById('save');
const dltBtn = document.getElementById('delete');
const inputLink = document.querySelector('input');
const linklist = document.getElementById('list');


saveBtn.addEventListener('click', function(){
    const link = inputLink.value
    myList.push(link);
    inputLink.value = '';
    localStorage.setItem('list', JSON.stringify(myList));
    render(myList);
    alert('saved! 🎉')
});

dltBtn.addEventListener('click', function(){
    localStorage.clear()
    myList = []
    render(myList)
});

function render(links) {
 let list = ''
 for (let i = 0; i < links.length; i++) {
    list += `
      <li>
           <a  target="_blank" href="${links[i]}">${links[i]}</a>
      </li>
    `
 }
 linklist.innerHTML = list
}