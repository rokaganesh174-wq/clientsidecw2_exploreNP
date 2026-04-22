// FUNCTION FOR DESCRIPTION DISPLAY
function showText(text) {
    document.getElementById("descBox").innerText = text;
}

// FORM VALIDATION
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Name and Email are required!");
        return false;
    }

    alert("Thank you! Your response has been submitted."); // success message

    document.getElementById("nepalForm").reset(); // clear form

    return false; // stop page reload
}


// CREATOR SHOW/HIDE
function showInfo(id) {
    document.getElementById(id).style.display = "block";
}

function hideInfo(id) {
    document.getElementById(id).style.display = "none";
}
