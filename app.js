// app.js - lógica de la lista de tareas
const listaTareas = document.getElementById("lista-tareas");

function renderizarTareas(tareas) {
  listaTareas.innerHTML = "";
  tareas.forEach(function (tarea) {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = tarea;
    listaTareas.appendChild(li);
  });
}

renderizarTareas(["Ejemplo de tarea inicial"]);
