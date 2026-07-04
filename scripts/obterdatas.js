// Obtém o ano atual
const currentYear = new Date().getFullYear();

// Exibe o ano no span
document.getElementById("currentyear").textContent = currentYear;

// Exibe a data da última modificação
document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;