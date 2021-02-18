// gallery
const figures = document.querySelectorAll(".gallery-items figure");
let lightbox = document.querySelector(".lightbox");

for (let figure of figures) {
  figure.addEventListener("click", function (e) {
    // on supprime le comportement par défaut des <a>
    e.preventDefault();

    // on execute la fonction qui aura pour but d'ouvrir la lightbox avec
    // le bon contenu et cette dernière récupère l'élément cliqué
    lightboxOn(this);
  });
}

//pour activer la fermeture de la lightbox
document.querySelector("#lightClose").addEventListener("click", function () {
  lightbox.style.opacity = 0;
  lightbox.style.zIndex = -1;
  document.querySelector("#lightImage").innerHTML = "";
  // ligne ci-dessus pour vider la place et dégager l'image qu'on vient de fermer
});

// **********************************************************************************************
// Lightbox

function lightboxOn(elem) {
  let currentElem = elem,
    prevElem = currentElem.previousElementSibling,
    nextElem = currentElem.nextElementSibling;
  // ci-dessus je stock dans des variables l'element figure courant, suivant et précedent.

  // si le voisin précédent est null
  if (prevElem === null) {
    prevElem = currentElem.parentElement.lastElementChild;
  }

  // si le voisin suivant est null
  if (nextElem === null) {
    nextElem = currentElem.parentElement.firstElementChild;
  }

  // on récupère le contenu du src, du premier enfant img de la figure sur laquelle on clique
  let src = currentElem.children[0].src;

  // on récupère le src de l'img du voisin précédent
  let prevSrc = prevElem.children[0].src;
  // on récupère le src de l'img du voisin suivant
  let nextSrc = nextElem.children[0].src;

  // **********************************************
  // Slider : left arrow & right arrow

  // au clique sur arrow left
  document.querySelector("#lightLeft").addEventListener("click", function () {
    // on récupère la figure précédente de celui du current
    prevElem = currentElem.prevElementSibling;
    // si le voisin précédent est null
    if (prevElem === null) {
      prevElem = currentElem.parentElement.lastElementChild;
    }
    while (prevElem.style.display === "none") {
      currentElem = prevElem;
      prevElem = currentElem.prevElementSibling;
    }
    currentElem = prevElem;
    // on récupère l'adresse de l'image à afficher
    let src = prevElem.children[0].src;

    // on modifie le contenu de lightImage par le contenu du voisin précédent
    lightImage.innerHTML = `<img src="${src}"/>`;
  });

  // au clique sur arrow right
  document.querySelector("#lightRight").addEventListener("click", function () {
    // on récupère la figure suivante de celui du current
    nextElem = currentElem.nextElementSibling;
    // si le voisin suivant est null
    if (nextElem === null) {
      nextElem = currentElem.parentElement.firstElementChild;
    }
    while (nextElem.style.display === "none") {
      currentElem = nextElem;
      nextElem = currentElem.nextElementSibling;
    }
    currentElem = nextElem;
    // on récupère l'adresse de l'image à afficher
    let src = nextElem.children[0].src;

    // on modifie le contenu de lightImage par le contenu du voisin suivant
    lightImage.innerHTML = `<img src="${src}"/>`;
  });

  // on change les pptées CSS pour faire apparaitre la lightbox
  lightbox.style.zIndex = 100;
  lightbox.style.opacity = 1;

  // on fait apparaitre la lightbox avec l'image complétée
  // document.querySelector('body').innerHTML +=
  // document.querySelector('#light')

  // on inclus notre image dans la lightbox
  document.querySelector("#lightImage").innerHTML = `<img src="${src}" />`;
}

// **********************************************************************************************
// Tri de la galerie

// document.querySelector("#tri-image").addEventListener("click", function (e) {
//   e.preventDefault();
//   for (let figure of figures) {
//     if (figure.dataset.gallery !== "image") {
//       figure.style.display;
//     }
//   }
// });
