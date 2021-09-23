let isEmpty = () => localStorage.length < 1;

function refresh() {
    if (!isEmpty) {
        console.log(localStorage.length < 1);
    }
    else {
        
        Object.keys(localStorage).forEach(function (key) {
            let todo = document.createElement("li");
            todo.innerHTML = localStorage.getItem(key);
            todoList.appendChild(todo);
        });
        //localStorage.clear();
    }
}

window.onload = () => {

    const todoForm = document.getElementById("todoForm");
    const todoList = document.getElementById("todoList");

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        createTask();
        document.getElementById("task").value = "";
        document.getElementById("deadline").value = "";
    });
    refresh();


}


const createTask = () => {
    const newTask = {
        task: document.getElementById("task").value,
        deadline: document.getElementById("deadline").value,
        status: "incomplete"
    }

    window.localStorage.setItem(localStorage.length + 1, JSON.stringify(newTask));
    refresh();


}
