const hambergerNav = document.querySelector('.hamberger-nav');
const hambergerClick = document.querySelector('.hamberger-click');
const closeButton = document.querySelector('.close_button');

hambergerNav.addEventListener('click',()=>{
    openHamberger();
})

closeButton.addEventListener('click', ()=>{
    closeHamberger();
})

window.addEventListener('click', (e)=>{
    console.log(e.target);
    if(e.target.classList.contains('hamberger-click')){
        closeHamberger();
    }
})

window.addEventListener('scroll', ()=>{
    closeHamberger();
})

function openHamberger() {
    hambergerClick.classList.add('active');
    
}

function closeHamberger(){
    hambergerClick.classList.remove('active');

}