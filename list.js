// Grocery Item List using Arrays and Objects

// Step 1: Create an array to store grocery items
let groceryItems = JSON.parse(localStorage.getItem("groceryItems")) || [];

// Step 2: Display all saved items
function displayItems() {

    let groceryList = document.getElementById("groceryList");

    groceryList.innerHTML = "";

    groceryItems.forEach(function(item) {

        let newItem = document.createElement("li");

        newItem.textContent = item.name + " - QTY: " + item.quantity;

        groceryList.appendChild(newItem);

    });
}

// Step 3: Add a new grocery item
function addItem() {

    let item = document.getElementById("item_name").value.trim();
    let qty = document.getElementById("item_qty").value;

    // Validate input
    if (item === "" || qty === "" || Number(qty) <= 0) {
        alert("Please enter valid item details!");
        return;
    }

    // Create an object
    let newItem = {
        name: item,
        quantity: Number(qty)
    };

    // Add object to array
    groceryItems.push(newItem);

    // Save array to Local Storage
    localStorage.setItem("groceryItems", JSON.stringify(groceryItems));

    // Display updated list
    displayItems();

    // Clear input fields
    document.getElementById("item_name").value = "";
    document.getElementById("item_qty").value = "";
}

// Step 4: Clear all grocery items
function clearList() {

    if (groceryItems.length === 0) {
        alert("Your grocery list is already empty!");
        return;
    }

    if (confirm("Are you sure you want to clear the list?")) {

        groceryItems = [];

        localStorage.removeItem("groceryItems");

        displayItems();

    }
}

// Step 5: Display saved items when page loads
displayItems();