function makeCountUp(target, goal, countDuration, framePerSec, inclination) {

    let played = false;

    window.addEventListener('scroll', ()=>{
        if(target.getBoundingClientRect().top - window.innerHeight < 0 && !played) {
            
            played = true;
            const playCount = countDuration * framePerSec / 1000

            function easeOutCubic(x) {
                return 1 - Math.pow(1 - x, inclination);  
            }
            
            for(let i = 0; i < playCount; i++) {
                const display = i / (playCount - 1);
        
                setTimeout(() => {
                    target.innerText = parseInt(easeOutCubic(display) * goal).toLocaleString(); 
                }, (countDuration / playCount) * (i + 1));
            }      
        }  
    })
}

