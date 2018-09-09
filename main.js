const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

//Set first img opacity
imgs[0].style.opacity = opacity;
imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    //Reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));
    //Clicked image src
    current.src = e.target.src;
    //Add fadeIn class
    current.classList.add('fade-in');
    //Remove fadeIn class after .5 sec
    setTimeout(() => current.classList.remove('fade-in'), 500);
    //Opacity for clicked image
    e.target.style.opacity = opacity;
}

