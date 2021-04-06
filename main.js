// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');

// Setup 'tock' sound
const tock = new Audio ('sounds/tock.mp3')
const kick = new Audio ('sounds/kick-drum.mp3')
const snare = new Audio ('sounds/snare-drum.mp3')
const hi = new Audio ('sounds/hi-hat.mp3')
const noteSound = new Audio ('sounds/note.mp3')
let time = 300
let countInputNumber=4

let num=0

// This function is called every 600ms
function update() {
    const metronome = document.querySelector('#metronome')
    const kickDrum = document.querySelector('#kick-drum')
    const snareDrum = document.querySelector('#snare-drum')
    const hiHat = document.querySelector('#hi-hat')
    const note = document.querySelector('#note')

    const countInput = document.querySelector('#count-input')
    if (countInput.value !== ''){
        countInputNumber = Number(countInput.value)
    } else {
        countInputNumber=4
    }
    const metronomeCount = (num%countInputNumber)+1

    const count = document.querySelector('#count')
    count.innerText = num

    const tempo = document.querySelector('#tempo')
    if(tempo.value!==''){
        time=Number(tempo.value)
        const arm = document.querySelector('.arm')
        arm.style.animationDuration= `${time*4}ms`
    } else {
        time=300
        const arm = document.querySelector('.arm')
        arm.style.animationDuration= `${300*4}ms`
    }

    let timingInput = document.querySelector('#metronome-timing')
    let kickDrumTiming = document.querySelector('#kick-drum-timing')
    let snareDrumTiming = document.querySelector('#snare-drum-timing')
    let hiHatTiming = document.querySelector('#hi-hat-timing')
    let noteTiming = document.querySelector('#note-timing')

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
    if (noteTiming.value !==''){
        note.checked = true
    } else {
        note.checked = false
    }

    if (metronome.checked){
        timingInput = timingInput.value.split(' ')
        for (const tact of timingInput){
            if(Number (tact) === metronomeCount){
                tick.play();
            }
        }
    } if(kickDrum.checked){
        kickDrumTiming = kickDrumTiming.value.split(' ')
        for (const tact of kickDrumTiming){
        if (Number(tact) === metronomeCount){
            kick.play()
        }
        }
    } if(snareDrum.checked){
        snareDrumTiming=snareDrumTiming.value.split(' ')
        for (const tact of snareDrumTiming){
        if (Number(tact) === metronomeCount){
            snare.play()
        }
    }
    } if(hiHat.checked){
        hiHatTiming = hiHatTiming.value.split(' ')
        for (const tact of hiHatTiming){
        if (Number(tact) === metronomeCount){
            hi.play()
        }
    }
    } if(note.checked){
        noteTiming=noteTiming.value.split(' ')
        for (const tact of noteTiming){
        if (Number(tact) === metronomeCount){
            noteSound.play()
        }
    }
    }
    num++
    updateInterval()
}
// This function sets up update() to be called every 600ms
let interval;
function setupUpdate() {
    interval = setInterval(update, time*2)
}

function updateInterval(){
    clearInterval(interval)
    interval = setInterval(update, time*2)
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, time);

const input = document.querySelectorAll('input')
const clear = document.querySelector('#clear')


clear.addEventListener('click', ()=>{
    for (const item of input){
        item.value = ''
    }
})
