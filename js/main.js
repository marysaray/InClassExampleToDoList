var mainDate = datepicker("#main-date");
mainDate.setMin(new Date());
var dueDate = datepicker("#due-date");
dueDate.setMin(new Date());
var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addItem = document.getElementById("add");
    addItem.onclick = main;
};
function main() {
    if (isValid()) {
        var item = getToDoItem();
        displayItem(item);
    }
}
function isValid() {
    return true;
}
function getToDoItem() {
    var newItem = new ToDoItem();
    var titleInput = getInput("title");
    newItem.title = titleInput.value;
    var mainDateInput = getInput("main-date");
    newItem.mainDate = new Date(mainDateInput.value);
    var dueDateInput = getInput("due-date");
    newItem.dueDate = new Date(dueDateInput.value);
    var isDone = getInput("is-done");
    newItem.isDone = isDone.checked;
    return newItem;
}
function displayItem(item) {
    var itemText = document.createElement("h3");
    itemText.innerText = item.title;
    var itemMainDate = document.createElement("li");
    var mainDate = new Date(item.mainDate.toString());
    itemMainDate.innerText = mainDate.toDateString();
    var itemDueDate = document.createElement("li");
    var dueDate = new Date(item.dueDate.toString());
    itemDueDate.innerText = dueDate.toDateString();
    var itemDiv = document.createElement("div");
    itemDiv.classList.add("incomplete");
    if (item.isDone) {
        itemDiv.classList.add("completed");
    }
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemMainDate);
    itemDiv.appendChild(itemDueDate);
    if (item.isDone) {
        var completeItems = getInput("complete-items");
        completeItems.appendChild(itemDiv);
    }
    else {
        var incompleteItems = getInput("incomplete-items");
        incompleteItems.appendChild(itemDiv);
    }
}
function getInput(id) {
    return document.getElementById(id);
}
