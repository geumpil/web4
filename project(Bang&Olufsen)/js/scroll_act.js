/* scroll bg-color change*/
const bgWhiteLocation = document.querySelector('.durability'); 
const bgBlackLocation = document.querySelector('.view-area');
const textColor = document.querySelector('.home-textarea')

window.addEventListener('scroll', () => {
    console.log(bgBlackLocation.getBoundingClientRect());
    if(bgWhiteLocation.getBoundingClientRect().top < 0 && bgBlackLocation.getBoundingClientRect().top > 0) {
        document.body.style.backgroundColor = 'white';
        document.body.style.transition = '0.4s';
        textColor.style.color = 'black';
    } 
    else{
        document.body.style.backgroundColor = 'black';
        textColor.style.color = 'white';
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



const foldContainer = document.querySelector('.fold-container');

window.addEventListener('scroll',()=>{
    if(foldContainer.getBoundingClientRect().top < 0 + window.innerHeight) {
        foldContainer.classList.add('unfolded')
    }else {
        
        foldContainer.classList.remove('unfolded')
    }
})