var boton = document.getElementById('boton');
boton.addEventListener("click",eliminarBoton);


//este boton me vacia las celdas y las colorea con un nuevo backgroundColor
function eliminarBoton() {
  this.style.display = "none";
  document.getElementById('celdaVacia').style.backgroundColor = "#00bfff";
}
