function toggleMenu() {
    var overlay = document.getElementById("overlay");
    var menu = document.getElementById("menu");
    overlay.style.display === "none" ? overlay.style.display = "block" : overlay.style.display = "none";
    menu.style.display === "none" ? menu.style.display = "block" : menu.style.display = "none";
}

function closeMenu() {
    var overlay = document.getElementById("overlay");
    var menu = document.getElementById("menu");
    overlay.style.display = "none";
    menu.style.display = "none";
}