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
const inclineAct = document.querySelector('.incline')
makeContentAct(contentAct)
makeCountUp(countUp, 8286684, 4000, 60, 5)

inclineAct.style.left = '50%';

window.addEventListener('scroll', () => {
    if(inclineAct.getBoundingClientRect().top - window.innerHeight < 0) {
        inclineAct.style.left = '0%';
    }
})

const hambergerButton = document.querySelector('.hamberger')
const hambergerClick = document.querySelector('.hamberger-click')
const hambergerNav = document.querySelector('.hamberger-nav')
const navTransition = 500;

hambergerNav.style.transition = `${navTransition}ms`;

function openHamberger() {
    hambergerButton.classList.add('active')
    hambergerClick.classList.add('active')
    headerAct.classList.add('active')

    setTimeout(() => {
       hambergerNav.style.transform = 'none'; 
    }, 0);
}

function closeHamberger(transition) {
    hambergerButton.classList.remove('active')
    hambergerNav.style.transform = 'translateX(100%)'; 

    setTimeout(() => {
        hambergerClick.classList.remove('active')
        headerAct.classList.remove('active')
    }, transition);
}

hambergerButton.addEventListener('click', (e)=> {
    e.preventDefault();
    if(hambergerButton.classList.contains('active')) {
        closeHamberger(navTransition);
    } else {
        openHamberger();
    }
})

window.addEventListener('scroll', ()=> {
    if(hambergerButton.classList.contains('active')) {
        closeHamberger(0);
    }
})

