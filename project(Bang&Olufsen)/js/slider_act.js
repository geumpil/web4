const slideBtn = document.querySelector('.slide-bar-btn');
const slideImg = document.querySelector('.slide-wrapper');
const slideImgList = document.querySelector('.slide-image-view');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 2;
apply();
// makeClone();

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

// clone 복제 생성
function makeClone() {
    let cloneFirstImg = slideImgList[0].cloneNode(true);
    let cloneLastImg = slideImg.lastElementChild.cloneNode(true);
    slideImg.append(cloneFirstImg);
    slideImg.insertBefore(cloneLastImg, slideImg.firstElementChild);
}

// prev, next button

function prev() {
    prevBtn.addEventListener('click', ()=> {

    })
}



