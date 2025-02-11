document.addEventListener('DOMContentLoaded', function() {
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
          const newTask = document.createElement('li');
          newTask.textContent = taskText;

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Eliminar';
          deleteBtn.style.backgroundColor = 'red';  // Fondo rojo
          deleteBtn.style.color = 'white';          // Texto blanco
          deleteBtn.style.border = 'none';          // Sin borde
          deleteBtn.style.padding = '5px 10px';     // Espaciado interno
          deleteBtn.style.marginLeft = '10px';      // Separación del texto
          deleteBtn.style.cursor = 'pointer';   
          deleteBtn.onclick = () => newTask.remove();

          newTask.appendChild(deleteBtn);
          taskList.appendChild(newTask);

          taskInput.value = '';
      }

      if (taskText === '') {
          alert('El campo no puede estar vacío');
      }
  }

  addTaskBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
          addTask();
      }
  });
});