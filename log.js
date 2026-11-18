// Login using Conditional Statement

function loginUser() {

    // Step 1: Retrieve data from Local Storage
    let savedRecord = localStorage.getItem("savedUser");

    // Step 2: Check if user exists
    if (savedRecord === null) {
        document.getElementById("logMessage").textContent =
            "No user found. Register first!";
        return;
    }

    // Step 3: Convert JSON data into JavaScript Object
    let userData = JSON.parse(savedRecord);

    // Step 4: Retrieve saved username and password
    let old_name = userData.fullName;
    let old_uname = userData.username;
    let old_password = userData.password;

    // Step 5: Get login input
    let login_uname = document.getElementById("login_uname").value.trim();
    let login_pword = document.getElementById("login_pword").value;

    // Step 6: Validate login input
    if (login_uname === "" || login_pword === "") {
        document.getElementById("logMessage").textContent =
            "Please enter your username and password.";
        return;
    }

    // Step 7: Check login credentials
    if (login_uname === old_uname && login_pword === old_password) {

        alert("Welcome " + old_name + "! You may now add item.");

        window.location.href = "list.html";

    } else {

        document.getElementById("logMessage").textContent =
            "Invalid User Credentials!";
    }
}
