/* scroll bg-color change*/
const bgWhiteLocation = document.querySelector('.durability'); 
const bgBlackLocation = document.querySelector('.home-textarea');

window.addEventListener('scroll', () => {
    console.log(bgBlackLocation.getBoundingClientRect());
    if(bgWhiteLocation.getBoundingClientRect().top < 0 && bgBlackLocation.getBoundingClientRect().bottom < 0) {
        // document.body.style.backgroundColor = 'white';
        document.body.style.transition = '1s';
    } 
    else{
        document.body.style.backgroundColor = 'black';
    }
}) 



/* scroll text effect */

const io = new IntersectionObserver((e, observer) => {
    e.forEach((action) => {
        if(action.isIntersecting) {
            action.target.style.opacity = '1';
        } else {
            action.target.style.opacity = '0';
        }
    })
})

document.querySelectorAll('.scroll-act').forEach((act) => io.observe(act));
