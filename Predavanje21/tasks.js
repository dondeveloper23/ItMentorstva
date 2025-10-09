// HTML Elements

const createTaskButton = document.getElementById("create-task");
const taskInput = document.getElementById("task-name")
const tasksList = document.getElementById("tasks-list");

//Local Storage

const loggedIn = localStorage.getItem("loggedIn");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Page load
showTasks()

if (loggedIn === null) {
    window.location.href = "index.html"
}



// Funkcije
function deleteTask(e, task) {
    let buttonID = e.target.getAttribute("taskId");

    if (parseInt(buttonID) === task) {
        e.target.parentElement.remove();
    }
    console.log(tasks)
    for (let item in tasks) {
        if (tasks[item].id === task) {
            console.log(item)
            tasks.splice(item, 1)
            const jsonTasks = JSON.stringify(tasks);
            localStorage.setItem("tasks", jsonTasks);

        }
    }
}

function showTasks() {
    if (tasks.length >= 1) {
        for (let task of tasks) {
            let singleTask = document.createElement("div");
            let taskName = document.createElement("p");
            let deleteButton = document.createElement("button");
            deleteButton.className = "delete-button";
            deleteButton.textContent = "Delete";
            deleteButton.setAttribute("taskId", task.id);
            deleteButton.addEventListener("click", e=> deleteTask(e, task.id))
            taskName.innerText = task.name;
            singleTask.append(taskName,deleteButton);
            tasksList.append(singleTask);
        }
    }
}

// Event listeners

createTaskButton.addEventListener("click", () => {
    tasksList.innerHTML = "";
    const taskName = taskInput.value;
    const dateTime = new Date();
    const id = dateTime.getTime();

    tasks.push({
        id: id,
        name: taskName
    });

    const jsonTasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", jsonTasks);
    showTasks()
})

