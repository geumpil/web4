const headerAct = document.querySelector('header')
let beforeScrolled = 0;

window.addEventListener('scroll', (e) => {
    if(window.scrollY >= 100) {
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

const contentAct = document.querySelectorAll('.advantage > *');
const countUp = document.querySelector('.count-up');
makeContentAct(contentAct)
makeCountUp(countUp, 8286684, 4000, 60, 5)

