const animationBar = document.querySelector('.bar-animation');
const circlePlus = document.querySelector('.plus');
const animationText = document.querySelector('.text-animation');
const contentText = ['Finance', 'Service', 'Data', 'People', 'Tech', 'Experience'];
const viewTextTime = 2000;
const typoTextTime = 100;
const playAnimationTime = viewTextTime * contentText.length + 2000 

function playAnimation() {
    reset();

    setTimeout(() => {
       playBar(); 
    }, 10);

    setTimeout(() => {
        viewPlus();
    }, 900);

    setTimeout(() => {
        typoText();
    }, 1500);
}

function reset() {
    animationBar.style.transition = '0s';
    animationBar.style.width = '20px';
    circlePlus.style.opacity = '0';
    circlePlus.style.transition = '0s';
    animationText.innerText = '';

    setTimeout(() => {
        animationBar.style.transition = '0.8s';
        circlePlus.style.transition = '0.8s';
    }, 1);
}

function playBar() {
    animationBar.style.width = '100px';
}

function viewPlus() {
    circlePlus.style.opacity = '1';
}

function typoText() {
    for(let i = 0; i < contentText.length; i++) {
        setTimeout(() => {
            animationText.innerText = '';
            for(let j = 0; j < contentText[i].length; j++) {
                setTimeout(() => {
                    animationText.innerText += contentText[i][j];
                }, typoTextTime * j);
            } 
        }, i * viewTextTime);
    }
}

