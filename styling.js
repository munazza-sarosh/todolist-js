// body
// document.body.style.backgroundColor = " lightBlue"
document.body.style.minHeight = "100vh"
document.body.style.margin = "0"
document.body.style.display = " flex"
document.body.style.flexDirection = " column"
document.body.style.alignItems = "center"
document.body.style.justifyContent = "center";
document.body.style.background = "linear-gradient(to bottom, #7ec9ee, rgb(11 46 62 / 77%)"

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

// fields

let fields = document.querySelector(".fields");
// fields.style.backgroundColor = "pink"
fields.prepend(h1);

