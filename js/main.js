let select = document.getElementById("time");

let min1 = document.getElementById("min1");
let sec1 = document.getElementById("sec1");
let min2 = document.getElementById("min2");
let sec2 = document.getElementById("sec2");

let swapbttn = document.getElementById("button");
let startbtn = document.getElementById("start");
let resetbtn = document.getElementById("reset");

let timer1 = document.getElementById("timer1");
let timer2 = document.getElementById("timer2");


function disableBtns() {
    startbtn.disabled = true;
    resetbtn.disabled = true;
    swapbttn.disabled = true;
}

disableBtns();

function enableBtns() {
    startbtn.disabled = false;
}

// handle time

function getTime() {
    let period = select.value;
    console.log(period);
    timer1.minutes = select.value;
    timer2.minutes = select.value;
    enableBtns()
    if (period == 0) {
        disableBtns();
        timer1.minutes = 0
        timer2.minutes = 0
    }

    timer1.seconds = 0;
    timer2.seconds = 0;

    timer1.isRunning = true;
    timer2.isRunning = false;


    if (timer1.minutes < 10) {
        min1.innerText = "0" + timer1.minutes;
    } else {
        min1.innerText = timer1.minutes;
    }

    sec1.innerText = "0" + timer1.seconds;



    if (timer1.minutes < 10) {
        min2.innerText = "0" + timer1.minutes;
    } else {
        min2.innerText = timer2.minutes;
    }

    sec2.innerText = "0" + timer2.seconds;
}

select.addEventListener("change", getTime)

// start btn

function startTimer() {

    resetbtn.disabled = false;
    swapbttn.disabled = false;
    startbtn.disabled = true;
    select.disabled = true;

    if (timer1.isRunning == true) {
        if (timer1.minutes == 0 && timer1.seconds == 0) {
            // endScreen.style.visibility = "visible"
            resetbtn.click()
        }

        if (timer1.seconds == 0) {
            timer1.seconds = 60
            timer1.minutes--
        }

        timer1.seconds--

        // lightA.style.visibility = "visible"
        // lightB.style.visibility = "hidden"

    }

    if (timer1.minutes < 10) {
        min1.innerText = "0" + timer1.minutes;
    } else {
        min1.innerText = timer1.minutes;
    }

    if (timer1.seconds < 10) {
        sec1.innerText = "0" + timer1.seconds;
    } else {
        sec1.innerText = timer1.seconds;
    }

    // secA.innerText = timerA.seconds;

    if (timer2.isRunning == true) {
        if (timer2.minutes == 0 && timer2.seconds == 0) {
            // endScreen.style.visibility = "visible"
            resetbtn.click();
        }

        if (timer2.seconds == 0) {
            timer2.seconds = 60
            timer2.minutes--
        }

        timer2.seconds--

        // lightB.style.visibility = "visible"
        // lightA.style.visibility = "hidden"
    }

    if (timer2.minutes < 10) {
        min2.innerText = "0" + timer2.minutes;
    } else {
        min2.innerText = timer2.minutes;
    }

    if (timer2.seconds < 10) {
        sec2.innerText = "0" + timer2.seconds;
    } else {
        sec2.innerText = timer2.seconds;
    }

    // secB.innerText = timerB.seconds;
    // minB.innerText = timerB.minutes;
}

let a;

function start() {
    startTimer()
    a = setInterval(startTimer, 1000)
}

startbtn.addEventListener("click", start)


//swap Button

function swap() {
    timer1.isRunning = !timer1.isRunning;
    timer2.isRunning = !timer2.isRunning;
}

swapbttn.addEventListener("click", swap)

// reset btn
function reset() {
    clearInterval(a)
    swapbttn.disabled = true;
    startbtn.disabled = true;
    select.disabled = false;
    resetbtn.disabled = true;
    select.value = 0

    // lightA.style.visibility = "hidden"
    // lightB.style.visibility = "hidden"

    min1.innerText = "00"
    min2.innerText = "00"
    sec1.innerText = "00"
    sec2.innerText = "00"
}

resetbtn.addEventListener("click", reset)