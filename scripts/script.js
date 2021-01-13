// HULP DOOR BABS LUIDINGA
var menuKnop = document.querySelector("nav button");

var uitklapMenu = document.querySelector("ul.menu");

function menuOpen (){
  uitklapMenu.classList.toggle("open")
}

menuKnop.addEventListener("click", menuOpen);
