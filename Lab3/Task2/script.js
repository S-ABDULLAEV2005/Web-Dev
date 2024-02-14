// Function to add a new todo item
function addItem() {
    var newItemText = document.getElementById("newItem").value;

    if (newItemText.trim() !== "") {
        var ul = document.getElementById("todoList");
        var li = document.createElement("li");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.onclick = function () {
            toggleDone(this);
        };

        var text = document.createElement("span");
        text.innerText = newItemText;

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function () {
            deleteItem(this);
        };

        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(deleteButton);

        ul.appendChild(li);

        document.getElementById("newItem").value = ""; // Clear the input field
    }
}

// Function to toggle the "done" status of a todo item
function toggleDone(checkbox) {
    var listItem = checkbox.parentNode;
    listItem.classList.toggle("done");
}

// Function to delete a todo item
function deleteItem(button) {
    var listItem = button.parentNode;
    listItem.remove();
}
