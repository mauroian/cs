if (window.innerWidth < 768) {
    let sidebar = document.getElementById("cs-left-sidebar");
    sidebar.classList.remove("cs-show");
    sidebar.classList.add("cs-hide");
}

addEventListener("resize", (event) => {
    const sidebar = document.getElementById("cs-left-sidebar");
    if (window.innerWidth < 768) {
        sidebar.classList.remove("cs-show");
        sidebar.classList.add("cs-hide");
    } else {
        sidebar.classList.remove("cs-hide");
        sidebar.classList.add("cs-show");
    }
});

const showSidebar = function () {
    const sidebar = document.getElementById("cs-left-sidebar");
    if (sidebar.classList.contains("cs-show")) {
        sidebar.classList.remove("cs-show");
        sidebar.classList.add("cs-hide");
    } else {
        sidebar.classList.remove("cs-hide");
        sidebar.classList.add("cs-show");
    }
}