// ========================================
// AGRICONNECT - JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("AgriConnect loaded successfully!");

    // Set current year
    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // Active navigation
    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }

    });

});


// ========================================
// LOGIN
// ========================================

function loginUser() {

    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");

    if (!email || !password) {
        return;
    }

    if (email.value.trim() === "" || password.value.trim() === "") {

        alert("Please enter your email and password.");

        return;
    }

    localStorage.setItem("agriUser", email.value);

    alert("Login successful! Welcome to AgriConnect 🌱");

    window.location.href = "index.html";
}


// ========================================
// REGISTER
// ========================================

function registerUser() {

    const name = document.getElementById("registerName");
    const email = document.getElementById("registerEmail");
    const password = document.getElementById("registerPassword");
    const confirmPassword =
        document.getElementById("confirmPassword");

    if (!name || !email || !password || !confirmPassword) {
        return;
    }

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        password.value.trim() === "" ||
        confirmPassword.value.trim() === ""
    ) {

        alert("Please fill in all fields.");

        return;
    }

    if (password.value.length < 6) {

        alert("Password must contain at least 6 characters.");

        return;
    }

    if (password.value !== confirmPassword.value) {

        alert("Passwords do not match.");

        return;
    }

    const user = {
        name: name.value,
        email: email.value
    };

    localStorage.setItem(
        "agriUser",
        JSON.stringify(user)
    );

    alert("Registration successful! 🌱");

    window.location.href = "login.html";
}


// ========================================
// LOGOUT
// ========================================

function logoutUser() {

    localStorage.removeItem("agriUser");

    alert("You have been logged out.");

    window.location.href = "index.html";
}


// ========================================
// CHECK LOGIN
// ========================================

function checkLogin() {

    const user = localStorage.getItem("agriUser");

    if (!user) {

        alert("Please login first.");

        window.location.href = "login.html";

        return false;
    }

    return true;
}


// ========================================
// SEARCH
// ========================================

function searchItems() {

    const searchBox =
        document.getElementById("searchBox");

    if (!searchBox) {
        return;
    }

    const searchText =
        searchBox.value.toLowerCase();

    const items =
        document.querySelectorAll(".search-item");

    items.forEach(function (item) {

        const itemText =
            item.textContent.toLowerCase();

        if (itemText.includes(searchText)) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });
}


// ========================================
// QUANTITY INCREASE
// ========================================

function increaseQuantity() {

    const quantity =
        document.getElementById("quantity");

    if (!quantity) {
        return;
    }

    let value = parseInt(quantity.value);

    if (isNaN(value)) {
        value = 1;
    }

    quantity.value = value + 1;
}


// ========================================
// QUANTITY DECREASE
// ========================================

function decreaseQuantity() {

    const quantity =
        document.getElementById("quantity");

    if (!quantity) {
        return;
    }

    let value = parseInt(quantity.value);

    if (isNaN(value) || value <= 1) {

        quantity.value = 1;

        return;
    }

    quantity.value = value - 1;
}


// ========================================
// ADD TO CART
// ========================================

function addToCart(productName) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(productName);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(productName + " added to cart 🛒");
}


// ========================================
// ADD TO WISHLIST
// ========================================

function addToWishlist(productName) {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push(productName);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert(productName + " added to wishlist ❤️");
}


// ========================================
// CONTACT FORM
// ========================================

function sendMessage() {

    const name =
        document.getElementById("contactName");

    const email =
        document.getElementById("contactEmail");

    const message =
        document.getElementById("contactMessage");

    if (!name || !email || !message) {
        return;
    }

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        message.value.trim() === ""
    ) {

        alert("Please fill in all fields.");

        return;
    }

    alert(
        "Thank you " +
        name.value +
        "! Your message has been sent successfully."
    );

    name.value = "";
    email.value = "";
    message.value = "";
}


// ========================================
// SHOW PASSWORD
// ========================================

function showPassword() {

    const password =
        document.getElementById("loginPassword");

    if (!password) {
        return;
    }

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }
}


// ========================================
// BACK TO TOP
// ========================================

function backToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}// ========================================
// AGRICONNECT - JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("AgriConnect loaded successfully!");

    // Set current year
    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // Active navigation
    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }

    });

});


// ========================================
// LOGIN
// ========================================

function loginUser() {

    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");

    if (!email || !password) {
        return;
    }

    if (email.value.trim() === "" || password.value.trim() === "") {

        alert("Please enter your email and password.");

        return;
    }

    localStorage.setItem("agriUser", email.value);

    alert("Login successful! Welcome to AgriConnect 🌱");

    window.location.href = "index.html";
}


// ========================================
// REGISTER
// ========================================

function registerUser() {

    const name = document.getElementById("registerName");
    const email = document.getElementById("registerEmail");
    const password = document.getElementById("registerPassword");
    const confirmPassword =
        document.getElementById("confirmPassword");

    if (!name || !email || !password || !confirmPassword) {
        return;
    }

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        password.value.trim() === "" ||
        confirmPassword.value.trim() === ""
    ) {

        alert("Please fill in all fields.");

        return;
    }

    if (password.value.length < 6) {

        alert("Password must contain at least 6 characters.");

        return;
    }

    if (password.value !== confirmPassword.value) {

        alert("Passwords do not match.");

        return;
    }

    const user = {
        name: name.value,
        email: email.value
    };

    localStorage.setItem(
        "agriUser",
        JSON.stringify(user)
    );

    alert("Registration successful! 🌱");

    window.location.href = "login.html";
}


// ========================================
// LOGOUT
// ========================================

function logoutUser() {

    localStorage.removeItem("agriUser");

    alert("You have been logged out.");

    window.location.href = "index.html";
}


// ========================================
// CHECK LOGIN
// ========================================

function checkLogin() {

    const user = localStorage.getItem("agriUser");

    if (!user) {

        alert("Please login first.");

        window.location.href = "login.html";

        return false;
    }

    return true;
}


// ========================================
// SEARCH
// ========================================

function searchItems() {

    const searchBox =
        document.getElementById("searchBox");

    if (!searchBox) {
        return;
    }

    const searchText =
        searchBox.value.toLowerCase();

    const items =
        document.querySelectorAll(".search-item");

    items.forEach(function (item) {

        const itemText =
            item.textContent.toLowerCase();

        if (itemText.includes(searchText)) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });
}


// ========================================
// QUANTITY INCREASE
// ========================================

function increaseQuantity() {

    const quantity =
        document.getElementById("quantity");

    if (!quantity) {
        return;
    }

    let value = parseInt(quantity.value);

    if (isNaN(value)) {
        value = 1;
    }

    quantity.value = value + 1;
}


// ========================================
// QUANTITY DECREASE
// ========================================

function decreaseQuantity() {

    const quantity =
        document.getElementById("quantity");

    if (!quantity) {
        return;
    }

    let value = parseInt(quantity.value);

    if (isNaN(value) || value <= 1) {

        quantity.value = 1;

        return;
    }

    quantity.value = value - 1;
}


// ========================================
// ADD TO CART
// ========================================

function addToCart(productName) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(productName);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(productName + " added to cart 🛒");
}


// ========================================
// ADD TO WISHLIST
// ========================================

function addToWishlist(productName) {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push(productName);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert(productName + " added to wishlist ❤️");
}


// ========================================
// CONTACT FORM
// ========================================

function sendMessage() {

    const name =
        document.getElementById("contactName");

    const email =
        document.getElementById("contactEmail");

    const message =
        document.getElementById("contactMessage");

    if (!name || !email || !message) {
        return;
    }

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        message.value.trim() === ""
    ) {

        alert("Please fill in all fields.");

        return;
    }

    alert(
        "Thank you " +
        name.value +
        "! Your message has been sent successfully."
    );

    name.value = "";
    email.value = "";
    message.value = "";
}


// ========================================
// SHOW PASSWORD
// ========================================

function showPassword() {

    const password =
        document.getElementById("loginPassword");

    if (!password) {
        return;
    }

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }
}


// ========================================
// BACK TO TOP
// ========================================

function backToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}