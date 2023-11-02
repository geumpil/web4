const slideBtn = document.querySelector('.slide-bar-btn');
const slideImg = document.querySelector('.slide-wrapper');
const slideImgList = document.querySelectorAll('.slide-image-view');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const realSlideCount = slideImgList.length;
const viewCount = 3;

let index = 5;
apply(false);
// makeClone();

for(let i = 0 ; i < slideBtn.childElementCount ; i ++) {

    slideBtn.children[i].addEventListener('click',()=>{
        index = i;
        console.log(i);
        apply(true);
    })
}

function apply(animation){
    slideImg.style.transform=  `translateX(calc((-1000px - 200px) * ${index}))`
    buttonUpdate(index);

    if(animation){
        slideImg.style.transition = `1s`
    }else{
        slideImg.style.transition = `0s`
    }
}

function buttonUpdate(realSlideCount) {
    // for(let i = 0 ; i < slideBtn.childElementCount; i++) {
    //     slideBtn.children[i].classList.remove('bar-act')
    // }
    // slideBtn.children[index].classList.add('bar-act')
}

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
        moveAble=false; 
        console.log(realSlideCount.length)

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


