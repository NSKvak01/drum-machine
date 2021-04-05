// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');

// Setup 'tock' sound
const tock = new Audio ('sounds/tock.mp3')

let num=0

// This function is called every 600ms
function update() {
    const metronome = document.querySelector('#metronome')
    if (metronome.checked){
        const count = document.querySelector('#count')
        count.innerText = num
        if (num%4===0){
            tock.play()
        } else{
            tick.play();
        }
        num++
    }
    

}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
