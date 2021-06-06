// @ts-ignore -- no intellisense for js-datepicker.
const mainDate = datepicker("#main-date");
mainDate.setMin(new Date()); // set today's date.
// @ts-ignore -- no intellisense for js-datepicker.
const dueDate = datepicker("#due-date");
dueDate.setMin(new Date()); // set today's date.
// create object for ToDoItem
class ToDoItem{
    title:string;
    mainDate:Date;
    dueDate:Date;
    isDone:boolean;
}
/**
 * When the web page is done loading
 */
window.onload = function(){
    // button can be executed
    let addItem = document.getElementById("add");
    addItem.onclick = main;
}
/**
 * When the Add Item button is clicked it will get all data from the getToDoItem method
 * the data will then be displayed by being passed in the displayItem method.
 */
function main(){
    if(isValid()){
        let item = getToDoItem();
        displayItem(item);
    }
}
/**
 * returns true if validation on the form is valid.
 * @returns 
 */
function isValid():boolean{
    return true;
}
/**
 * This function get the data from the user's input 
 * put information in the ToDoItem object.
 */
function getToDoItem():ToDoItem{
    // create new instance of ToDoItem.
    let newItem = new ToDoItem();

    /* populate data from the web page. */

    // get title
    let titleInput = getInput("title");
    newItem.title = titleInput.value;
    // get mainDate
    let mainDateInput = getInput("main-date");
    newItem.mainDate = new Date(mainDateInput.value); // gets the whole element
    // get dueDate
    let dueDateInput = getInput("due-date");
    newItem.dueDate = new Date(dueDateInput.value); // get the whole element
    // check-box trigger event
    let isDone = getInput("is-done");
    newItem.isDone = isDone.checked;
    // return all data to ToDoItem
    return newItem;
}
/**
 * 
 * @param item 
 */
function displayItem(item:ToDoItem):void{
    /* create element on web page to display. */
    // create <h3> on web page for title
    let itemText = document.createElement("h3");
    // display title in the h3 element created.
    itemText.innerText = item.title;
    // create <p> element on web page for <"main-date">
    let itemMainDate = document.createElement("li");
    let mainDate = new Date(item.mainDate.toString());
    itemMainDate.innerText = mainDate.toDateString();
    // create <p> element on web page for <"due-date">
    let itemDueDate = document.createElement("li");
    let dueDate = new Date(item.dueDate.toString());
    itemDueDate.innerText = dueDate.toDateString();

    /* create div to store complete and incomplete items. */
    let itemDiv = document.createElement("div");
    if(item.isDone){ // box is checked
        itemDiv.classList.add("completed"); // add to class completed.
    }

    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemMainDate);
    itemDiv.appendChild(itemDueDate);

    if(item.isDone){
        let completeItems = getInput("complete-items");
        completeItems.appendChild(itemDiv);
    }
    else{
        let incompleteItems = getInput("incomplete-items");
        incompleteItems.appendChild(itemDiv);
        
    }
}
/**
 * creates a shorter syntax for document.getElmemntById
 * @param id 
 * @returns 
 */
function getInput(id):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}