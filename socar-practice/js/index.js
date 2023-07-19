const headerAct = document.querySelector('header')
let beforeScrolled = 0;

window.addEventListener('scroll', (e) => {
    if(window.scrollY >= 0) {
        headerAct.classList.add('scroll-act');
    } else {
        headerAct.classList.remove('scroll-act');
    }

    if(beforeScrolled < window.scrollY) {
        headerAct.classList.add('hide');
    } else {
        headerAct.classList.remove('hide');
    }

    beforeScrolled = window.scrollY;
    
})