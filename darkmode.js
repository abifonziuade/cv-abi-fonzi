const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const btn_mobile = document.querySelector('.btn-mobile');
const icon = document.querySelector('.btn__icon');
const icon_mobile = document.querySelector('.btn__icon-mobile');

//funcion que se ejecuta al cargar la pagina
function load(){
  // guarda en una constante el valor del darkmode en localstorage
  const darkmode = localStorage.getItem('darkmode');

  // chequea si nunca se activó el darkmode
  if(!darkmode){
    localStorage.setItem('darkmode', false);
    icon.classList.add('fa-sun');
    icon_mobile.classList.add('fa-sun');
  } else if( darkmode == 'true'){ //chequea si el darkmode esta activado
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
    icon_mobile.classList.add('fa-moon');
  } else if(darkmode == 'false'){ //chequea si el darkmode esta desactivado
    icon.classList.add('fa-sun');
    icon_mobile.classList.add('fa-sun');
  }
}

load();

btn.addEventListener('click', () => {
    // el toggle agrega o saca la clase darkmode del body
  body.classList.toggle('darkmode');

  //guarda en localstorage si se activó o desactivó el darkmode
  localStorage.setItem('darkmode', body.classList.contains('darkmode'));

  if(body.classList.contains('darkmode')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }else{
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
})

btn_mobile.addEventListener('click', () => {
    // el toggle agrega o saca la clase darkmode del body
  body.classList.toggle('darkmode');

  //guarda en localstorage si se activó o desactivó el darkmode
  localStorage.setItem('darkmode', body.classList.contains('darkmode'));

  if(body.classList.contains('darkmode')){
    icon_mobile.classList.remove('fa-sun');
    icon_mobile.classList.add('fa-moon');
  }else{
    icon_mobile.classList.remove('fa-moon');
    icon_mobile.classList.add('fa-sun');
  }
})