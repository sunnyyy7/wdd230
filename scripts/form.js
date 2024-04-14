function checkPasswordMatch() {
    const password = document.getElementById("password");
    const confirm_password = document.getElementById("confirm_password");
    const message = document.getElementById("formmessage");

    if (password.value !== confirm_password.value) {
        message.textContent = "❗Passwords do not match!";
        message.style.visibility = "visible";
        confirm_password.setCustomValidity("Passwords do not match");
    } else {
        message.style.visibility = "hidden";
        confirm_password.setCustomValidity("");
    }
}

function displayRatingValue() {
    const rating = document.getElementById("page_rating");
    const ratingValue = document.getElementById("rating_value");
    ratingValue.textContent = rating.value;
}