// @ts-ignore -- no intellisense for js-datepicker.
const mainDate = datepicker("#main-date");
mainDate.setMin(new Date()); // set today's date.
// @ts-ignore -- no intellisense for js-datepicker.
const dueDate = datepicker("#due-date");
dueDate.setMin(new Date()); // set today's date.

/* create fields for object:ToDoItem. */
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
    // create <li> element on web page for <id="main-date">
    let itemMainDate = document.createElement("li");
    // turns date object to string format.
    let mainDate = new Date(item.mainDate.toString());
    itemMainDate.innerText = mainDate.toDateString();
    // create <li> element on web page for <id="due-date">
    let itemDueDate = document.createElement("li");
    // turns date object to string format.
    let dueDate = new Date(item.dueDate.toString());
    itemDueDate.innerText = dueDate.toDateString();

    /* create div to store completed and incomplete items. */

    let itemDiv = document.createElement("div");
    // add on-click event to entire element
    itemDiv.onclick = markAsComplete;

    /* creates <class="incomplete"> */
    itemDiv.classList.add("incomplete");
    /* creates <class"completed"> */
    if(item.isDone){ // box is checked
        itemDiv.classList.add("completed"); // add to class completed.
    }
    // adds one element down from the parent element itemDiv.
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemMainDate);
    itemDiv.appendChild(itemDueDate);
    // decisions for newItem being added was checked complete or not. 
    if(item.isDone){
        // <div> for <id="complete-items>
        let completeItems = getInput("complete-items");
        completeItems.appendChild(itemDiv);
    }
    else{
        // <div> for <id="incomplete-items">
        let incompleteItems = getInput("incomplete-items");
        incompleteItems.appendChild(itemDiv);
    }
}
/**
 * This changes an incomplete item to be added to the completed item.
 */
function markAsComplete(){
    console.log(this); // shows specific element being clicked.
    let itemDiv = <HTMLElement>this; // cast for intellisense
    itemDiv.classList.add("completed");
    // get <div> element <class="complete-items"> 
    let completedItems = getInput("complete-items");
    // adds to <class="complete-items"> <div>
    completedItems.appendChild(itemDiv);
}
/**
 * creates a shorter syntax for document.getElmemntById
 * @param id 
 * @returns 
 */
function getInput(id):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}