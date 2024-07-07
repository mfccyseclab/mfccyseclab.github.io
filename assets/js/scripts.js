// popup hambuger
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("mobo-menu");
    const menu = document.querySelector(".menu");

    //others
    const about = document.querySelector("#about");
    const service = document.querySelector("#service");
    const contact = document.querySelector("#contact");

    menuIcon.addEventListener("click", function () {
        if (about.style.display == "flex") {
        console.log("hambuger btn closed!");
        offHambuger();
        } else {
        console.log("hambuger btn opened!");
        onHambuger();
        }
    });
});

function onHambuger() {
    // menu.classList.toggle("show");
    about.style.display = "flex";
    service.style.display = "flex";
    contact.style.display = "flex";
}

function offHambuger() {
    // menu.classList.toggle("show");
    about.style.display = "none";
    service.style.display = "none";
    contact.style.display = "none";
}

// document.addEventListener("DOMContentLoaded", function () {
//     const menuIcon = document.getElementById("mobo-menu");
//     const menu = document.querySelector(".menu");

//     menuIcon.addEventListener("click", function () {
//       menu.classList.toggle("show");
//     });
// });
