const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
let secondCounter = 0;
let minutesCounter = 0;
let hoursCounter = 0;
let isRunning = false;
let setIntervalId;

function startCounting(){
    isRunning = true;
   
       setIntervalId = setInterval(() => {
            secondCounter++;
            if(secondCounter >= 60){
                minutesCounter++
                secondCounter = 0
                if(minutesCounter >= 60){
                    minutesCounter = 0;
                    hoursCounter++;    
                }
            }
            
            seconds.textContent = `${secondCounter < 10 ? '0' : ''}${secondCounter}`;
            minutes.textContent = `${minutesCounter < 10 ? '0' : ''}${minutesCounter}`;
            hours.textContent = `${hoursCounter < 10 ? '0' : ''}${hoursCounter}`;
    
        }, 1000);
        // console.log('btn-clicked');
    
}


function pauseCounting() {
    isRunning = false;
    clearInterval(setIntervalId);
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        startCounting();
        startBtn.innerText = 'Resume';  // Change button text to "Resume"
    }  // Change button text to "Resume"
});

pauseBtn.addEventListener('click', () => {
    if (isRunning) {
        pauseCounting();
        startBtn.innerText = 'Start';  // Change button text to "Resume"
    }
});
resetBtn.addEventListener('click', () => {
    if (!isRunning || isRunning) {
        secondCounter = 0;
        minutesCounter = 0;
        hoursCounter = 0;

        seconds.innerText = '00';
        minutes.innerText = '00';
        hours.innerText = '00';

        startBtn.innerText = 'Start';  // Reset the "Start" button text
        clearInterval(setIntervalId)
       
    }
})