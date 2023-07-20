function makeCountUp(target, goal, countDuration, framePerSec, inclination) {
        
    function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, inclination);  
    }

    const playCount = countDuration * framePerSec / 1000

    for(let i = 0; i < playCount; i++) {
        const display = i / (playCount - 1);

        setTimeout(() => {
            target.innerText = parseInt(easeOutCubic(display) * goal).toLocaleString(); 
        }, (countDuration / playCount) * (i + 1));

    }
}