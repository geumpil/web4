const headerExpand = document.querySelector('header > div');
const listHoverActive = document.getElementsByClassName('main-list-cate');
const imageText = document.getElementsByClassName('sub-list-cate');
const imageView = document.getElementsByClassName('sub-image-list');
const subImageView = document.getElementsByClassName('sub-image-view')

function headerExpandMenu() {
    for(let i = 0; i < listHoverActive.length; i++) {
        listHoverActive[i].addEventListener('mouseover', () => {
            removeActive();
            if(!listHoverActive[i].classList.contains('no-list')) {
                headerExpand.classList.add('header-expand');
            }
            listHoverActive[i].classList.add('hover-active');
        })
        listHoverActive[i].addEventListener('mouseleave', () => {
            removeActive();
            headerExpand.classList.remove('header-expand');
        })
    }

    for(let i = 0; i < imageText.length; i++) {
        imageText[i].addEventListener('mouseover', () => {
            for(let j = 0 ; j < imageView.length; j ++) {
                imageView[j].style.opacity = '0';
            }
            imageView[i].style.opacity = '1';
        })
      
    }

    function init() {
        for(let i = 0 ; i <subImageView.length;i++){
            subImageView[i].firstElementChild.style.opacity='1'
            // subImageView[i].firstElementChildChild.style.opacity = '1';
        }
    }

    init();

    function removeActive() {
        for(let i = 0; i <listHoverActive.length; i++) {
            listHoverActive[i].classList.remove('hover-active');
        }
    }

    
}
