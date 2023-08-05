const headerExpand = document.querySelector('header');
const listHoverActive = document.getElementsByClassName('main-menu-list');

function headerExpandMenu() {
    for(let i = 0; i < listHoverActive.length; i++) {
        listHoverActive[i].addEventListener('mouseover', ()=> {
            removeActive();
            headerExpand.classList.add('expand-header');
            listHoverActive[i].classList.add('hover-active');
        })
    }
    
    headerExpand.addEventListener('mouseleave', () => {
        removeActive();
        headerExpand.classList.remove('expand-header');
    })
    
    function removeActive() {
        for(let i = 0; i < listHoverActive.length; i++) {
            listHoverActive[i].classList.remove('hover-active');
        }
    }
}

