//Step 1: Get User Details
function saveUserRecord() {

    let fname = document.getElementById("full_name").value.trim();
    let address = document.getElementById("address").value.trim();
    let uname = document.getElementById("user_name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pword = document.getElementById("pword").value;

    // Step 2: Form Validation
    if (
        fname === "" ||
        address === "" ||
        uname === "" ||
        email === "" ||
        pword === ""
    ) {
        document.getElementById("regMessage").textContent =
            "Please complete all required details.";

        document.getElementById("regMessage").className = "error";
        return;
    }

    // Step 3: Store User Details using Object
    let userRecord = {
        fullName: fname,
        address: address,
        username: uname,
        email: email,
        password: pword
    };

    // Step 4: Save Object to Local Storage
    localStorage.setItem("savedUser", JSON.stringify(userRecord));

    // Step 5: Display Success Message
    document.getElementById("regMessage").textContent =
        "User details have been recorded successfully!";

    document.getElementById("regMessage").className = "success";

    // Step 6: Proceed to Login Page
    alert("Registration successful!");

    window.location.href = "login.html";
}