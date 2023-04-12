const saveBtn = document.getElementById('save');
const dltBtn = document.getElementById('delete');
const inputLink = document.querySelector('input');
const linklist =document.getElementsByClassName('list');

saveBtn.addEventListener('click', function(){
    const link = inputLink.value;
    console.log(link);
});

dltBtn.addEventListener('click', function(){
    console.log('deleted 😝');
});