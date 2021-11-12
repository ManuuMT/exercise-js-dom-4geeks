const container = document.getElementById("container");
const input = document.getElementById("input");
const delInp = document.getElementById("deleteInput");
const delLast = document.getElementById("deleteLast");
const delBtn = document.getElementById("deleteButton");
//TODO: crea una funcion que elimine de pantalla la columna que corresponda con el indice introducido en deleteInput
// si pongo un id que no existe debe mostrar un error

// Evitamos que se cargue el evento por defecto del FORM (recargar la pagina)
document
  .querySelector("#myForm")
  .addEventListener("submit", ev => ev.preventDefault());

console.log(container.childNodes);

// Cuando hacemos click en el boton creamos un <div class="col">
document.getElementById("button").addEventListener("click", () => {
  //crear el elemento
  let div = document.createElement("div");
  div.setAttribute("class", "col");

  //TODO: CREAR UN HN AL AZAR (H1-H2...H6)
  div.innerHTML = `<h1>${input.value.toUpperCase()}</h1>`;
  container.appendChild(div);
  console.log(container.childNodes);
});

// Borrar la columna con el indice seleccionado
delBtn.addEventListener("click", () => {
  if (container.children[delInp.value]) {
    container.removeChild(container.children[delInp.value]);
    console.log(container.childNodes);
  } else console.error("Esa columna no existe, my friend");
});

delLast.addEventListener("click", () => {
  //comprobar hijos
  if (container.children.length > 0) {
    //Eliminar el ultimo nodo

    container.removeChild(container.children[container.children.length - 1]);
    //console.log(container.children.length - 1);
    console.log(container.childNodes);
    //console.log(container.children[0]);
  } else console.error("No hay nadie a quien eliminar");
});

//crear evento
input.addEventListener("keyup", ev => {
  if (ev.keyCode == 13) {
    console.log("Estamos cambiando el evento");
    //TODO: REFACTORIZAR
    for (let value of container.children) {
      console.log(value);
      value.innerHTML = `<h1>${input.value.toUpperCase()}</h1>`;
    }
  }
});
