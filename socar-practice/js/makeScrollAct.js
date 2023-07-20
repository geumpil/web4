function makeContentAct(contentAct, effectDirection) {
    if(effectDirection === 'left') {
        for(let i = 0; i < contentAct.length; i++) {
            contentAct[i].classList.add('left')
        }
    } else {
        for(let i = 0; i < contentAct.length; i++) {
            contentAct[i].classList.add('right')
        }
    }
    for(let i = 0; i < contentAct.length; i++) {
        contentAct[i].classList.add('scroll-content')
    }
        
    window.addEventListener('scroll', (e) => {
        
        for(let i = 0; i < contentAct.length; i++) {
            
            if(contentAct[i].getBoundingClientRect().top - window.innerHeight < 0) {
                contentAct[i].classList.add('active');
            } else {
                contentAct[i].classList.remove('active');
            }  
        }
    })
}