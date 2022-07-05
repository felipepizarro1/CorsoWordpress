const menu = document.querySelector('nav');
window.addEventListener('scroll', cambiocolore );
menu.style.padding = "50px 0px";

function cambiocolore(){

    if ( document.documentElement.scrollTop >= 1 ) {
 
        menu.classList.remove('bg-transparent');
        menu.classList.add('bg-light');
        menu.classList.remove('navbar-dark');
        menu.classList.add('navbar-light');
        menu.style.padding = "10px 0px";
        menu.style.transition = "all 0.5s";

    } else {

        menu.classList.add('bg-transparent');
        menu.classList.remove('bg-light');
        menu.classList.add('navbar-dark');
        menu.classList.remove('navbar-light');
        menu.style.padding = "50px 0px";
        menu.style.transition = "all 0.5s";

    }


} 
