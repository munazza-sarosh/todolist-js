// container styling

let container = document.createElement("div")
container.style.width = "90%"
container.style.maxWidth = "500px"
container.style.minHeight = "100px"
container.style.height = "auto"
container.style.backgroundColor = "rgb(3 17 24 / 18%)"
container.style.display = " flex"
container.style.flexDirection = " column"
container.style.justifyContent = "center"
container.style.alignItems = "center"
container.style.borderRadius = "20px"
container.style.boxShadow = "20px 19px 25px rgb(1 0 0 / 51%)"

// list
let ul = document.createElement("ul")

// ul styling

ul.className = "todo-list";
ul.style.padding = "20px";
ul.style.width = "80%"
let storage_ = JSON.parse(localStorage.getItem("todolist")) || []

// li styling
function styleTask(li) {
    li.className = "todo-item";

    li.style.backgroundColor = "#ffffff87";
    li.style.margin = "10px";
    li.style.padding = "10px";
    li.style.borderRadius = "10px";
    li.style.color = "#3e3b3bb3";
}

storage_.forEach(store => {
    let li = document.createElement("li")
    li.innerHTML = store;
    styleTask(li);

    // li styling
    // li.className = "todo-item";

    // li.style.backgroundColor = "#ffffff87";
    // li.style.margin = "10px";
    // li.style.padding = "10px";
    // li.style.borderRadius = "10px"
    // li.style.color = "#3e3b3bb3"

    ul.appendChild(li);
});

// text
storage_ = JSON.parse(localStorage.getItem("todolist")) || [];

let task = document.getElementById("text");
task.addEventListener("keydown", todo_task)

function todo_task(event) {
    if (event.keyCode === 13) {
        storage_ = JSON.parse(localStorage.getItem("todolist")) || []
        let display = task.value;
        storage_.push(display)
        storage_ = localStorage.setItem("todolist", JSON.stringify(storage_))
        let li = document.createElement("li")
        li.innerHTML = display;
        styleTask(li);
        ul.appendChild(li)
    }
}
container.appendChild(fields)
container.appendChild(ul)
document.body.appendChild(container)