// body
// document.body.style.backgroundColor = " lightBlue"
document.body.style.minHeight = "100vh"
document.body.style.margin = "0px"
document.body.style.display = " flex"
document.body.style.flexDirection = " column"
document.body.style.alignItems = "center"
document.body.style.justifyContent = "center";
document.body.style.background = "linear-gradient(to bottom, #7ec9ee, rgb(11 46 62 / 92%))"

// // container
// container.style.width = "500px"
// // container.style.backgroundColor = "white"

// heading
let h1 = document.createElement("h1")
h1.innerHTML = "To Do List";
h1.className = "heading"
h1.style.color = "white"
h1.style.textAlign = "center"

// input

let input = document.getElementById("text");
input.style.width = "90%";
input.style.padding = "10px";
input.style.border = "2px solid gray";
input.style.height = "30px"
input.style.borderRadius = "10px"
input.style.outline = "none"
input.style.fontSize = "16px";
// input.style.focus.borderColor= "blue"

// fieldss
let fields = document.querySelector(".fields");
fields.prepend(h1);

// li styling
function styleTask(li) {
    li.className = "todo-item";
    li.style.backgroundColor = "#ffffff87";
    li.style.margin = "10px";
    li.style.padding = "10px";
    li.style.borderRadius = "10px";
    li.style.color = "#3e3b3bb3";
}
// delete button styling
function dltbtn(deleteBtn) {
    deleteBtn.style.marginLeft = "10px"
    deleteBtn.style.padding = "7px 12px"
    deleteBtn.style.border = "none"
    deleteBtn.style.borderRadius = "8px"
    deleteBtn.style.cursor = "pointer"
    deleteBtn.style.backgroundColor = "rgb(118 4 4)"
    deleteBtn.style.color = "white"
    deleteBtn.style.fontSize = "14px"
}
// edit button styling
function edit(editBtn) {
    editBtn.style.marginLeft = "5px"
    editBtn.style.padding = "7px 12px"
    editBtn.style.border = "none"
    editBtn.style.borderRadius = "8px"
    editBtn.style.cursor = "pointer"
    editBtn.style.backgroundColor = "#7ec9ee"
    editBtn.style.color = "white"
    editBtn.style.fontSize = "14px"
}