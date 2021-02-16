// On utilise ECMAScript 2015 ES6
document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("visible");
});

// fonctionnement :

// dans le document, je recherche le selecteur avec la class burger ; puis écouter les événements clic
// lorsqu'il "entend" le clic, il execute une fonction
// dans le doc, on recherche le selecteur "nav", on regarde sa liste de classe, et on lui demande
// d'alterner entre ajouter/supprimer la classe "visible"
// toggle = alterner un état vers un autre

// button go to top :

function scrolltotop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Animated Accordion :

// on va créer un array titles qui va contenir tous les h3
const titles = document.querySelectorAll(".accordion h3");
