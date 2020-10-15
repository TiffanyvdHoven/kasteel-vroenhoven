function mobileNavFunction() {

    var nav = document.getElementById("mobile-nav");
    var languageSelector = document.getElementById("mobile-nav-selector");
    if (nav.style.display === "block") {
            nav.style.display = "none";
            languageSelector.style.display = "none";
        } else {
            nav.style.display = "block";
            languageSelector.style.display = "inline-flex";
        }
}
