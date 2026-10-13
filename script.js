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


// storage_.forEach(store => {
//     let li = document.createElement("li")
//     li.innerHTML = store;
//     styleTask(li);
//     ul.appendChild(li);
// });
let task = document.getElementById("text");
task.addEventListener("keydown", todo_task)


function rendertodo() {
    ul.innerHTML = "";
    // storage_ = JSON.parse(localStorage.getItem("todolist")) || []
    storage_.forEach(store => {
        // li
        let li = document.createElement("li")

        // checkbox
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = store.status;

        checkbox.addEventListener("change", function () {
            store.status = checkbox.checked;
            localStorage.setItem("todolist", JSON.stringify(storage_));
        });

        li.appendChild(checkbox)

        // span
        let taskText = document.createElement("span");
        taskText.textContent = store.text;


        // delete button

        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "delete"

        // deleteBtn.setAttribute("id", "deletebtn")
        // deleteBtn.addEventListener('click', () => {
        //     let removeitemarr = JSON.parse(localStorage.getItem('todoItems')) || []
        //     li.remove()
        // })

        deleteBtn.addEventListener("click", () => {
            storage_ = storage_.filter(item => item.id !== store.id);
            localStorage.setItem("todolist", JSON.stringify(storage_));
            li.remove();
        });
        dltbtn(deleteBtn)

        // edit button

        let editBtn = document.createElement("button")
        editBtn.textContent = "edit"
        // editBtn.setAttribute("id", "editbtn")
        edit(editBtn);

        editBtn.addEventListener("click", function () {
            let newTask = prompt("Edit your task:", taskText.textContent)

            if (newTask !== null && newTask !== "") {
                taskText.textContent = " " + newTask + " "
                store.text = newTask.trim();
                localStorage.setItem("todolist", JSON.stringify(storage_));
            }
        })


        li.appendChild(taskText)
        li.appendChild(deleteBtn)
        li.appendChild(editBtn)
        styleTask(li);
        ul.appendChild(li)
        task.value = ""

    })
}
// function todo task

function todo_task(event) {
    if (event.key === "Enter" && task.value.trim() != "") {
        const objarray = {
            id: Date.now(),
            text: task.value.trim(),
            status: false
        }
        if (storage_.some(store => store.text.toLowerCase() === task.value.trim().toLowerCase())) {
            alert("Task already exists!");
            return;
        }
        storage_.push(objarray)
        localStorage.setItem("todolist", JSON.stringify(storage_)) || []
        task.value = ""
        rendertodo();
    }
}
rendertodo();

container.appendChild(fields)
container.appendChild(ul)
document.body.appendChild(container)