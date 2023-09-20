const headerBg = document.querySelector('header')

window.addEventListener('scroll', (e) => {
    if(window.scrollY >= 10) {
        headerBg.classList.add('act');
    } else {
        headerBg.classList.remove('act');
    }
})
