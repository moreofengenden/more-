const agregarBtn = document.getElementById('agregarBtn');
const Listatareas = document.getElementById('Listatareas');

agregarBtn.addEventListener('click' , function(){

const tareainput = document.getElementById('nuevatarea');
const nuevatareatexto = tareainput.value;
const nuevatarea = document.createElement('li');
nuevatarea.textContent=nuevatareatexto;
Listatareas.appendChild(nuevatarea);
tareainput.value = '';
});
