const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent =
    `Última Modificação: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});