const tasks = document.querySelector("ul#taskList");
var textInput = document.getElementById("iToDo");
const form = document.getElementById("taskForm");


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
    finishTaskIcon.classList.add("done");
    finishTaskIcon.textContent = "done";
    finishTask.append(finishTaskIcon);

    const deleteTask = document.createElement("button");
    const deleteTaskIcon = document.createElement("span");
    deleteTaskIcon.setAttribute("class", "material-symbols-outlined");
    deleteTaskIcon.classList.add("delete");
    deleteTaskIcon.textContent = "delete";
    deleteTask.append(deleteTaskIcon);
    
    buttonSpace.append(finishTask, deleteTask);
    tasks.append(buttonSpace);
}

function buttonsFunction(event) {
    const eventTarget = event.target;
    const parentElement = eventTarget.closest("li");
    if (eventTarget.classList.contains("done")) {
        var node = parentElement.childNodes;
        for (let i=0; i < node.length; i++) {
            if (node[i].classList.contains("taskTitle")) {
                const taskText = node[i];
                taskText.classList.toggle("finished");
            }
        }  
    }
    else if (eventTarget.classList.contains("delete")) {
        parentElement.remove();
    };
}

addTaskButton.addEventListener("click", () => {
    addTaskList(textInput.value);
});


document.addEventListener("click", (e) => {
    buttonsFunction(e);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
})