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