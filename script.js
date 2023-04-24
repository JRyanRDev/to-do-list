function addTaskList(userInput) {
    if (userInput.trim().length === 0) {
        return;
    }
    else {
        const newTaskList = document.createElement("li");
        
        const textSpace = document.createElement("div");
        textSpace.setAttribute("class", "taskTitle");
        textSpace.textContent = `${userInput}`;
        newTaskList.append(textSpace);
        
        createButtons(newTaskList);
        tasks.append(newTaskList);
    }
}

function createButtons(tasks) {
    const buttonSpace = document.createElement("div");
    buttonSpace.setAttribute("class", "buttonSpace");

    const finishTask = document.createElement("button");
    const finishTaskIcon = document.createElement("span");
    finishTaskIcon.setAttribute("class", "material-symbols-outlined");
    finishTaskIcon.textContent = "done";
    finishTask.append(finishTaskIcon);

    const editTask = document.createElement("button");
    const editTaskIcon = document.createElement("span");
    editTaskIcon.setAttribute("class", "material-symbols-outlined");
    editTaskIcon.textContent = "edit";
    editTask.append(editTaskIcon);

    const deleteTask = document.createElement("button");
    const deleteTaskIcon = document.createElement("span");
    deleteTaskIcon.setAttribute("class", "material-symbols-outlined");
    deleteTaskIcon.textContent = "delete";
    deleteTask.append(deleteTaskIcon);
    
    buttonSpace.append(finishTask, editTask, deleteTask);
    tasks.append(buttonSpace);
}

function deleteTaskList() {
}


const tasks = document.querySelector("ul#taskList");
const addTaskButton = document.querySelector("input#addTaskButton");
const deleteTaskButton = document.querySelectorAll("div.buttonSpace button");
var textInput = document.getElementById("iToDo");

addTaskButton.addEventListener("click", () => {
    addTaskList(textInput.value);
})


