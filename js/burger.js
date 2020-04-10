window.addEventListener("load", burger);

function burger() {
    document.querySelector(".menuknap").addEventListener("click", toggleMenu);
}


function toggleMenu() {
    document.querySelector(".menu").classList.toggle("showmenu");


    let erSkjult = document.querySelector(".menu").classList.contains("showmenu");
    if (erSkjult == true) {
        document.querySelector(".menuknap").textContent = "✕";

        document.querySelector(".menuknap").classList.add("whiten");


    } else {

        document.querySelector(".menuknap").textContent = "☰";
        document.querySelector(".menuknap").classList.remove("whiten");
    }
}
