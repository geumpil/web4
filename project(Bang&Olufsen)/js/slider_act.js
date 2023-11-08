const slideBtn = document.querySelector('.slide-bar-btn');
const slideImg = document.querySelector('.slide-wrapper');
const slideImgList = document.querySelectorAll('.slide-image-view');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const realSlideCount = slideImgList.length;
const viewCount = 3;

let slideSize = '1000px';
let gapSize = 200;

let index = 5;

for(let i = 0 ; i < realSlideCount ; i ++) {


    const bar = document.createElement('div');
    bar.classList.add('bar');

    bar.addEventListener('click', ()=>{
        index = i+viewCount;
        console.log(i);
        apply(true);

        // for(let j = 0 ; j < slideBtn.childElementCount; j++) {
        //     slideBtn.children[j].classList.remove('bar-act')
        // }
        // bar.classList.add('bar-act')
    })

    slideBtn.appendChild(bar);

}

apply(false);

function apply(animation){
    slideImg.style.transform=  `translateX(calc((-${slideSize} - ${gapSize}px) * ${index}))`
    buttonUpdate();

    if(animation){
        slideImg.style.transition = `1s`
    }else{
        slideImg.style.transition = `0s`
    }
}

function buttonUpdate() {
    for(let i = 0 ; i < slideBtn.childElementCount; i++) {
        slideBtn.children[i].classList.remove('bar-act')
    }
    console.log(slideBtn.children[index-viewCount])

    if(index<viewCount) {
        slideBtn.lastElementChild.classList.add('bar-act')
    }else if(index>realSlideCount+viewCount-1){
        slideBtn.firstElementChild.classList.add('bar-act')

    }else{
        slideBtn.children[index-viewCount].classList.add('bar-act')

    }

}

// 슬라이드 1000px, 갭 200px
// 1264분기점
// 슬라이드 580px 갭 100px

// 744, 100vw 갭 0px

window.addEventListener('resize',(e)=>{
    if(window.innerWidth>1264) {
        slideSize='1000px';
        gapSize=200;
    }else if(window.innerWidth>744) {
        slideSize='580px';
        gapSize=100;
    }else {
        slideSize='100vw';
        gapSize=0;
    }
    apply(false);
})


makeClone();

// clone 복제 생성
function makeClone() {

    const 앞복사 = [];
    const 뒷복사 = [];

    //슬라이드i복사
        // 슬라이드1복사
        // 슬라이드2복사
        // 슬라이드3복사

        for(let i = 0 ; i < viewCount ; i ++) {
            앞복사.push(slideImgList[i].cloneNode(true));
            뒷복사.push(slideImgList[slideImgList.length-1-i].cloneNode(true));
        }

        for(let i = 0 ; i < viewCount ; i ++) {
        }

        for(let i = 0 ; i < viewCount ; i ++) {
            slideImg.insertBefore(뒷복사[i],slideImg.firstElementChild)
            slideImg.appendChild(앞복사[i])
        }

    // 슬라이드5복사
    // 슬라이드4복사
    // 슬라이드3복사

    // 복사한것 붙여넣기(앞)
    // 복사한것 붙여넣기(뒤)
}

// prev, next button

    let moveAble = true;

    prevBtn.addEventListener('click', ()=> {
        if(moveAble){
            moveAble=false;
            index--;
            apply(true)
            
            setTimeout(() => {
                
                if(index<viewCount){
                index=realSlideCount-1+viewCount;
                apply(false);
            }
            moveAble=true;
        }, 1000);
    }
    })

    nextBtn.addEventListener('click',()=>{
       if(moveAble){
        moveAble = false; 
        // console.log(realSlideCount.length)
        index++;
        apply(true)
        setTimeout(() => {

            if(index>realSlideCount-1+viewCount){
                index=viewCount;
                apply(false);
            }
            moveAble=true;
        }, 1000);}
    })


