const hamburger = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidebar.classList.toggle("active");
});

const dropdown = document.querySelector(".dropdown");
const content = document.querySelector(".dropdown-content");
dropdown.addEventListener("click", () => {
    content.classList.toggle("active");
});

const popupBtn = document.querySelector(".popup-btn");
const popupForm = document.querySelector(".popup-login-form");
const closeBtn = document.querySelector(".close-btn");
popupBtn.addEventListener("click", () => {
    popupForm.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
    popupForm.classList.toggle("active");
});