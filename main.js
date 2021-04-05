// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');

// Setup 'tock' sound
const tock = new Audio ('sounds/tock.mp3')
const kick = new Audio ('sounds/kick-drum.mp3')
const snare = new Audio ('sounds/snare-drum.mp3')
const hi = new Audio ('sounds/hi-hat.mp3')

let num=0

// This function is called every 600ms
function update() {
    const metronome = document.querySelector('#metronome')
    const kickDrum = document.querySelector('#kick-drum')
    const snareDrum = document.querySelector('#snare-drum')
    const hiHat = document.querySelector('#hi-hat')
    const metronomeCount = (num%4)+1
    const count = document.querySelector('#count')
    count.innerText = num

    const timingInput = document.querySelector('#metronome-timing')
    const kickDrumTiming = document.querySelector('#kick-drum-timing')
    const snareDrumTiming = document.querySelector('#snare-drum-timing')
    const hiHatTiming = document.querySelector('#hi-hat-timing')
    if(timingInput.value!== ''){
        metronome.checked=true
    } else {
        metronome.checked = false
    }
    if(kickDrumTiming.value !==''){
        kickDrum.checked = true
    } else{
        kickDrum.checked=false
    }
    if (snareDrumTiming.value !==''){
        snareDrum.checked=true
    } else{
        snareDrum.checked=false
    }
    if (hiHatTiming.value !==''){
        hiHat.checked = true
    } else {
        hiHat.checked=false
    }




    if (metronome.checked){
        
        if(Number (timingInput.value) === metronomeCount){
            tick.play();
        }
    } if(kickDrum.checked){
        if (Number(kickDrumTiming.value) === metronomeCount){
            kick.play()
        }
    } if(snareDrum.checked){
        if (Number(snareDrumTiming.value) === metronomeCount){
            snare.play()
        }
    } if(hiHat.checked){
        if (Number(hiHatTiming.value) === metronomeCount){
            hi.play()
        }
    }
    num++
    

}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
