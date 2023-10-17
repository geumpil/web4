const headerExpand = document.querySelector('header > div');
const listHoverActive = document.getElementsByClassName('main-list-cate');
const imageText = document.getElementsByClassName('sub-list-cate');
const imageView = document.getElementsByClassName('sub-image-list');

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

    // for(let i = 0; i < imageText.length; i++) {
    //     imageText[i].addEventListener('mouseover', () => {
    //         for(let j = 0; j < imageView.length; j++) {
    //             if(i == j) {
    //                 imageView[j].style.opacity = '1';
    //             }
    //         }
    //     })
    //     imageView[i].addEventListener('mouseleave', () => {
    //         for(let j = 0; j < imageView.length; j++) {
    //             if(i == j) {
    //                 imageView[j].style.opacity = '0';
    //             }
    //         }
    //     })
    // }

    for(let i = 0; i < imageText.length; i++) {
        imageText[i].addEventListener('mouseover', () => {
            for(let j = 0 ; j < imageView.length; j ++) {
                imageView[j].style.opacity = '0';
            }
            imageView[i].style.opacity = '1';
        })
      
    }


    // imageView[i].addEventListener('mouseleave', () => {
    //     for(let j = 0; j < imageView.length; j++) {
    //         if(i == j) {
    //             imageView[j].style.opacity = '0';
    //         }
    //     }
    // })


    function removeActive() {
        for(let i = 0; i <listHoverActive.length; i++) {
            listHoverActive[i].classList.remove('hover-active');
        }
    }

    
}
