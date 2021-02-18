// gallery
const figures = document.querySelectorAll('.gallery-items figure');
Let lightbox = document.querySelector('.lightbox');

for(let figure of figures){
  figure.addEventListener('click',function(e){
    // on supprime le comportement par défaut des <a>
    e.preventDefault();

    // on execute la fonction qui aura pour but d'ouvrir la lightbox avec
    // le bon contenu et cette dernière récupère l'élément cliqué 
    lightboxOn(this);
  });
}

function lightboxOn(elem){
  // on récupère le contenu du src, du premier enfant img de la figure sur laquelle on clique
  Let src = elem.children[0].src;

  // on change les pptées CSS pour faire apparaitre la lightbox
  lightbox.style.zIndex = 100;
  lightbox.style.opacity = 1;

  // on fait apparaitre la lightbox avec l'image complétée
  // document.querySelector('body').innerHTML +=
  // document.querySelector('#light')

  document.querySelector('#lightImage').innerHTML = `<img src"${src}" />`;
  
  lightboxClose();
}

function lightboxClose(){
  document
  .querySelector('#lightClose')
  .addEventListener('clicke',function(){
    lightbox.style.opacity = -1;
    lightbox.style.zIndex = 0;
  })
}

// au clique sur arrow right
document.querySelector('#lightRight').addEventListener('click',function(){
  // on récupère la figure suivante de celui du current
  nextElem = currentElem.nextElementSibling;
  // si le voisin suivant est null
  if (nextElem === null){
    nextElem = currentElem.parentElement.firstElementChild;
  }
  while (nextElem.style.display === 'none'){
    currentElem = nextElem;
    nextElem = currentElem.nextElementSibling;
  }
  currentElem = nextElem;
  // on récupère l'adresse de l'image à afficher
  Let src = nextElem.children[0].src;
  // on modifie le contenu de lightImage par le contenu du voisin suivant
  lightImage.innerHTML = `<img src="${src}"/>`;
})

// Tri de la galerie

document.querySelector('#tri-image').addEventListener('click',function(e){
  e.preventDefault();
  for(let figure of figures){
    if(figure.dataset.gallery !== 'image'){
      figure.style.display
    }
  }
})