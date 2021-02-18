// gallery
const figures = document.querySelectorAll('.gallery-items figure');

for(let figure of figures){
  figure.addEventListener('click',function(e){
    // on supprime le comportement par défaut des <a>
    e.preventDefault();

    // on execute la fonction qui aura pour but d'ouvrir la lightbox avec
    // le bon contenu et cette dernière récupère l'élément cliqué 
    lightbox(this);
  });
}
function lightbox(elem){
  // on récupère le contenu du src, du premier enfant img de la figure sur laquelle on clique
  Let src = elem.children[0].src;

  // on fait apparaitre la lightbox avec l'image complétée
  document.querySelector('body').innerHTML += 
  document.querySelector('#light')
}

function lightboxOn(elem){
  Let currentElem = elem;
}

// Tri de la galerie

document.querySelector('#tri-image').addEventListener('click',function(e){
  e.preventDefault();
  for(let figure of figures){
    if(figure.dataset.gallery !== 'image'){
      figure.style.display
    }
  }
})