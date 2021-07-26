// Change Mode
function turnMode() {
    var Mode = document.body;
    Mode.classList.toggle("darkmode");
}
// Get the name of the day
var days = ["Sunday", "Monday"];
var day = new Date();
document.getElementById("day").innerHTML = days[day.getDay()];


//global variable
var content = document.getElementById("task-content");
var mainDiv = document.getElementById("added-task");
var noTaskMsg = document.getElementById("no-tasks");

// Add task
function add() {
    if (content.value != "") {
        noTaskMsg.innerHTML = "";
        createTask();
    }
    else {
        content.focus();
    }
}


// Create a task 
function createTask() {
    //Create task div 
    var taskDiv = document.createElement("div");

    // 1-Create checkbox class= task-done
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-done";

    //<input type="checkbox" class="task-done"/>

    //2- Create label to contain task
    var label = document.createElement("label");
    label.innerHTML = content.value;



    //3- Create Delete button for specific task class = "del-icon to-right"
    var span = document.createElement("span");
    span.innerHTML = '<i class="far fa-trash-alt"></i>';
    span.className = "del-icon to-right";
    span.onclick = function del() {
        taskDiv.remove();
        if (mainDiv.childElementCount == 1) {
            noTaskMsg.innerHTML = "No Tasks yet!";
            content.focus();
        }
    }


    //4- Append checkbox, label and span to taskDiv 
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(span);

    // 5- Append mainDiv to the added-task div & remove content of input 
    mainDiv.appendChild(taskDiv);
    content.value = '';

}

