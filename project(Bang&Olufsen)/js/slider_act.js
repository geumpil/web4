const slideBtn = document.querySelector('.slide-bar-btn');
const slideImg = document.querySelector('.slide-wrapper');

let index = 2;
apply();

for(let i = 0 ; i < slideBtn.childElementCount ; i ++) {

    slideBtn.children[i].addEventListener('click',()=>{
        index = i;
        console.log(i);
        apply();

    })
}

function apply(){
    slideImg.style.transform=  `translateX(calc((-1000px - 200px) * ${index}))`
    buttonUpdate(index);
}

function buttonUpdate(index) {
    for(let i = 0 ; i < slideBtn.childElementCount; i ++) {
        slideBtn.children[i].classList.remove('bar-act')
    }
    slideBtn.children[index].classList.add('bar-act')
}