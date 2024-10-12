const time = document.getElementById("currentTime");
const taskInput = document.getElementById("inputTask");
const taskSubmit = document.getElementById("submitTask");
const tasksArea = document.getElementById("tasksContainer");
const audio = document.getElementById("winAudio");
const title = document.getElementById("title");
const audio_addTask = document.getElementById("addTaskAudio");

let taskCount = 0;

// Display current time
time.textContent = new Date().toDateString();

// Add a task when the button is clicked
taskSubmit.addEventListener('click', addTask);
taskInput.addEventListener('keydown', addTaskKeyboard);

setInterval((e) => {
    if(title.style.visibility  === "hidden")
    {
        title.style.visibility = "visible";
    }else {
        title.style.visibility  = "hidden";
    }

}, 400);


function addTaskKeyboard(e) {
    if (e.key === 'Enter') {
        addTask();
    }
}


function addTask() {
    if (taskInput.value) {
        let task = document.createElement("div");
        taskCount++;
        task.id = taskCount.toString();
        let taskName = document.createElement("div");
        taskName.textContent = taskInput.value;
        task.classList.add("task");

        audio_addTask.play();
        task.appendChild(taskName);
        tasksArea.appendChild(task);

        // Clear the input field after adding the task
        taskInput.value = '';


        task.addEventListener('click', completeTask);
    } else {
        alert("Please enter a task first");
    }
}

function completeTask(e) {
    const task = e.currentTarget;
    audio.play();
    task.classList.add("completed");

    // Wait for 3 seconds before removing the task
    setTimeout(() => {
        task.remove();
    }, 500);
}