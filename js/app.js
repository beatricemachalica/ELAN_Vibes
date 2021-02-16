// On utilise ECMAScript 2015 ES6

// Menu burger :

document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("visible");
});

// fonctionnement :

// dans le document, je recherche le selecteur avec la class burger ; puis écouter les événements clic
// lorsqu'il "entend" le clic, il execute une fonction
// dans le doc, on recherche le selecteur "nav", on regarde sa liste de classe, et on lui demande
// d'alterner entre ajouter/supprimer la classe "visible"
// toggle = alterner un état vers un autre

// Button "go to top" :

function scrolltotop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Animated Accordion :

// on va créer un array titles qui va contenir tous les h3
const titles = document.querySelectorAll(".accordion h3");

//pour chaque éléments du tableau je veux un comportement
// donc on utilise for ou for of

for (let title of titles) {
  // on peut toujours vérifier avec un :
  // console.log(title);
  title.addEventListener("click", function () {
    // je fais apparaitre l'élément
    this.parentElement.classList.toggle("panel-active");
  });
}
