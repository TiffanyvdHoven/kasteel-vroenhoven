
// global var declarations
var nav = document.getElementById("mobile-nav");
var languageSelector = document.getElementById("mobile-nav-selector");

// basiswaarde van display none voor mobiel menu
nav.style.display = 'none';

// functie voor mobile navigatie openen/sluiten
function mobileNavFunction() {
    if (nav.style.display === "none") {
            nav.style.display = "block";
            languageSelector.style.display = "inline-flex";
        } else {
            nav.style.display = "none";
            languageSelector.style.display = "none";
        }
}

// zorgt er voor dat menu sluit als je van desktop naar mobiel gaat
window.addEventListener('resize', function() {
  nav.style.display = 'none';
  languageSelector.style.display = 'none';
});
