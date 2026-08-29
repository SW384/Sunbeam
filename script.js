const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItemButton");
const packingList = document.getElementById("packingList");
const eventInput = document.getElementById("eventInput");
const dateInput = document.getElementById("dateInput");
const addEventButton = document.getElementById("addEventButton");
const scheduleList = document.getElementById("scheduleList");

function addItem() {
    const itemText = itemInput.value;
    if (itemText.trim() == ""){
        return;
    }
    const newItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const text = document.createTextNode(itemText);
    checkbox.addEventListener("change", function() {
        newItem.classList.toggle("completed");
    });
    newItem.appendChild(checkbox);
    newItem.appendChild(text);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        newItem.remove();
    });
    newItem.appendChild(deleteButton);
    packingList.appendChild(newItem);
    itemInput.value = "";
}
addItemButton.addEventListener("click", addItem);

function addEvent(){
    const eventText = eventInput.value;
    const eventDate = dateInput.value;
    if(eventText.trim() == "" || eventDate == ""){
        return;
    }
    const newEvent = document.createElement("li");
    newEvent.dataset.date = eventDate;
    const formattedDate = new Date(eventDate).toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
    newEvent.textContent = eventText + " - " + formattedDate;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        newEvent.remove();
    });
    newEvent.appendChild(deleteButton);
    scheduleList.appendChild(newEvent);
    const events = Array.from(scheduleList.children);
    events.sort(function(a, b){
        return new Date(a.dataset.date) - new Date(b.dataset.date);
    });
    events.forEach(function(event){
        scheduleList.appendChild(event);
    });
    eventInput.value = "";
    dateInput.value = "";
}
addEventButton.addEventListener("click", addEvent);

function showPage(pageName) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(pageName).style.display = "block";
}