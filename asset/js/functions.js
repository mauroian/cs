
const showHamburgerBorder = function () {
    const hamburger = document.getElementById("cs-hamburger");
    if (hamburger.classList.contains("cs-hamburger-open")) {
        hamburger.classList.remove("cs-hamburger-open");
    } else {
        hamburger.classList.add("cs-hamburger-open");
    }
}

const showHide = function (elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}