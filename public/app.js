var input = document.getElementById("inp")
var toDoList = document.getElementById("toDoLi")
var toDoData = []
// console.log(toDoData)

function addToDo() {
    toDoData.unshift(input.value)
    input.value = ""
    render();
}

function render(delAll) {
    toDoList.innerHTML = "";
    if (delAll)
        return;
    for (i = 0; i < toDoData.length; i++) {
        toDoList.innerHTML += `<li Class="liListicons" > <i id="usersIcon" class="fa-solid fa-circle-user"></i> ${toDoData[i]}
        <div Class= 'iconslast'> <button id = 'twoIcon' onclick="edittoDo(${i})"><i class="fa-solid fa-pen-to-square"></i></i></button>
    <button id = 'twoIcon'  onclick="DeletetoDo(${i})"><i class="fa-solid fa-square-minus"></i></div></button> </li> `
    }
}

function edittoDo(e) {
    toDoData[e] = prompt("")
    render();
}

function DeletetoDo(e) {
    toDoData.splice(e, 1);
    render();
}
