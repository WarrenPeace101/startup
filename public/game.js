const GameEndEvent = 'gameEnd';
const GameStartEvent = 'gameStart';
const greenFrogEl = document.getElementById("frogID");

let color = localStorage.getItem("frogColor");
const frogBody = document.getElementById("frog-body");
const frogLeftEye = document.getElementById("left-eye");
const frogRightEye = document.getElementById("right-eye");
const frogLeftFoot = document.getElementById("left-foot");
const frogRightFoot = document.getElementById("right-foot");

if (color === "pinkFrog") {
    frogBody.style.background = "pink";
    frogLeftEye.style.background = "pink";
    frogRightEye.style.background = "pink";
    frogLeftFoot.style.background = "pink";
    frogRightFoot.style.background = "pink";
    frogBody.style.borderColor = "#d406d5";
    frogLeftEye.style.borderColor = "#d406d5";
    frogRightEye.style.borderColor = "#d406d5";
    frogLeftFoot.style.borderColor = "#d406d5";
    frogRightFoot.style.borderColor = "#d406d5";
}
else if (color === "blueFrog") {
    frogBody.style.background = "#8167f6";
    frogLeftEye.style.background = "#8167f6";
    frogRightEye.style.background = "#8167f6";
    frogLeftFoot.style.background = "#8167f6";
    frogRightFoot.style.background = "#8167f6";
    frogBody.style.borderColor = "#1905c8";
    frogLeftEye.style.borderColor = "#1905c8";
    frogRightEye.style.borderColor = "#1905c8";
    frogLeftFoot.style.borderColor = "#1905c8";
    frogRightFoot.style.borderColor = "#1905c8";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "a") {

        greenFrogEl.style.left = parseFloat(greenFrogEl.style.left || 0) - 5 + 'px';
        
    }
    if (e.key === "w") {

        greenFrogEl.style.top = parseFloat(greenFrogEl.style.top || 0) - 5 + 'px';
        
    }
    if (e.key === "s") {

        greenFrogEl.style.top = parseFloat(greenFrogEl.style.top || 0) + 5 + "px";

    }
    if (e.key === "d") {


        greenFrogEl.style.left = parseFloat(greenFrogEl.style.left || 0) + 5 + "px";

    }
});

const flyOneEl = document.getElementById("fly");
const flyTwoEl = document.getElementById("fly2");
const flyThreeEl = document.getElementById("fly3");
const flyFourEl = document.getElementById("fly4");
const flyFiveEl = document.getElementById("fly5");

async function eatFly() {

    const userName = localStorage.getItem('userName') ?? "Mystery player";
    var flyOneEaten = false;
    var flyTwoEaten = false;
    var flyThreeEaten = false;
    var flyFourEaten = false;
    var flyFiveEaten = false;


    while (1) {

        if ((flyOneEl.style.visibility === 'hidden') && (flyTwoEl.style.visibility === 'hidden') &&
         (flyThreeEl.style.visibility === 'hidden') && (flyFourEl.style.visibility === 'hidden') && (flyFiveEl.style.visibility === 'hidden'))
         {
            flyOneEl.style.visibility = 'visible';
            flyTwoEl.style.visibility = 'visible';
            flyThreeEl.style.visibility = 'visible';
            flyFourEl.style.visibility = 'visible';
            flyFiveEl.style.visibility = 'visible';
            flyOneEaten = false;
            flyTwoEaten = false;
            flyThreeEaten = false;
            flyFourEaten = false;
            flyFiveEaten = false;
            this.broadcastEvent(userName, GameEndEvent, userName);
            await win();
        }

        if (parseFloat(greenFrogEl.style.top || 0) < -640) {

            if ((parseFloat(greenFrogEl.style.left || 0) > -250) && ((parseFloat(greenFrogEl.style.left || 0) < -200)) &&
            flyOneEaten === false) {

                greenFrogEl.style.top = 10;
                flyOneEl.style.visibility = 'hidden';
                flyOneEaten = true;
            }

            if ((parseFloat(greenFrogEl.style.left || 0) > -15) && ((parseFloat(greenFrogEl.style.left || 0) < 55))
            && flyTwoEaten === false) {

                greenFrogEl.style.top = 10;
                flyTwoEl.style.visibility = 'hidden';
                flyTwoEaten = true;

            }

            if ((parseFloat(greenFrogEl.style.left || 0) > 300) && ((parseFloat(greenFrogEl.style.left || 0) < 350))
            && flyThreeEaten === false) {

                greenFrogEl.style.top = 10;
                flyThreeEl.style.visibility = 'hidden';
                flyThreeEaten = true;

            }

            if ((parseFloat(greenFrogEl.style.left || 0) > 600) && ((parseFloat(greenFrogEl.style.left || 0) < 650))
            && flyFourEaten === false) {

                greenFrogEl.style.top = 10;
                flyFourEl.style.visibility = 'hidden';
                flyFourEaten = true;

            }

            if ((parseFloat(greenFrogEl.style.left || 0) > 900) && ((parseFloat(greenFrogEl.style.left || 0) < 950))
            && flyFiveEaten === false) {

                greenFrogEl.style.top = 10;
                flyFiveEl.style.visibility = 'hidden';
                flyFiveEaten = true;

            }
        }
        await sleep(200);
    }
}

const truckOneEl = document.getElementById("truckOneID");
const truckTwoEl = document.getElementById("truckTwoID");
const truckThreeEl = document.getElementById("truckThreeID");
const logOneEl = document.getElementById("logOne");
const logThreeEl = document.getElementById("logThree");

async function driveLeft() {

    while (1) {

        truckOneEl.style.left = parseFloat(truckOneEl.style.left || 0) - 20 + "px";
        truckTwoEl.style.left = parseFloat(truckTwoEl.style.left || 0) - 40 + "px";
        truckThreeEl.style.left = parseFloat(truckThreeEl.style.left || 0) - 50 + "px";
        logOneEl.style.left = parseFloat(logOneEl.style.left || 0) - 40 + "px";
        logThreeEl.style.left = parseFloat(logThreeEl.style.left || 0) - 15 + "px";

        await sleep(200);

        if (parseFloat(truckOneEl.style.left || 0) < -900) {
            truckOneEl.style.left = 500;
        }
        if (parseFloat(truckTwoEl.style.left || 0) < -900) {
            truckTwoEl.style.left = 500;
        }
        if (parseFloat(truckThreeEl.style.left || 0) < -900) {
            truckThreeEl.style.left = 500;
        }
        if (parseFloat(logOneEl.style.left || 0) < 0) {
            logOneEl.style.left = 1500;
        }
        if (parseFloat(logThreeEl.style.left || 0) < 0) {
            logThreeEl.style.left = 1500;
        }
    }
}

const carOneEl = document.getElementById("carOneID");
const carTwoEl = document.getElementById("carTwoID");
const logTwoEl = document.getElementById("logTwo");

async function driveRight() {

    while (1) {

        carOneEl.style.left = parseFloat(carOneEl.style.left || 0) + 50 + "px";
        carTwoEl.style.left = parseFloat(carTwoEl.style.left || 0) + 100 + "px";
        logTwoEl.style.left = parseFloat(logTwoEl.style.left || 0) + 30 + "px";

        await sleep(300);

        if (parseFloat(carOneEl.style.left || 0) > 900) {
            carOneEl.style.left = -500;
        }

        if (parseFloat(carTwoEl.style.left || 0) > 900) {
            carTwoEl.style.left = -500;
        }

        if (parseFloat(logTwoEl.style.left || 0) > 1400) {
            logTwoEl.style.left = 25;
        }
    }
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function hitCar() {

    while (1) {

        if (parseFloat(greenFrogEl.style.top) < -370  && parseFloat(greenFrogEl.style.top) > -450 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(truckOneEl.style.left) + 600)) < 50){
            greenFrogEl.style.top = 15;
            await death();
        }

        if ((parseFloat(greenFrogEl.style.top) < -290) && (parseFloat(greenFrogEl.style.top) > -385) &&
        (Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(carOneEl.style.left || 0)) - 90) < 40))
        {
            greenFrogEl.style.top = 15;
            await death();
        }

        if (parseFloat(greenFrogEl.style.top) < -160  && parseFloat(greenFrogEl.style.top) > -235 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(truckTwoEl.style.left) + 600)) < 50){
            greenFrogEl.style.top = 15;
            await death();
        }

        if ((parseFloat(greenFrogEl.style.top) < -80) && (parseFloat(greenFrogEl.style.top) > -170) &&
        (Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(carTwoEl.style.left || 0)) - 100) < 40))
        {
            greenFrogEl.style.top = 15;
            await death();
        }

        if (parseFloat(greenFrogEl.style.top) < -10  && parseFloat(greenFrogEl.style.top) > -100 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(truckThreeEl.style.left) + 600)) < 50){
            greenFrogEl.style.top = 15;
            await death();
        }

        if (parseFloat(greenFrogEl.style.left) < -400) {
            greenFrogEl.style.left = 300;
            greenFrogEl.style.top = 15;
            await death();
        }

        if (parseFloat(greenFrogEl.style.left) > 1200) {
            greenFrogEl.style.left = 300;
            greenFrogEl.style.top = 15;
            await death();
        }

        if (parseFloat(greenFrogEl.style.top) > 25) {
            greenFrogEl.style.left = 300;
            greenFrogEl.style.top = 15;
            await death();
        }

        if (parseFloat(greenFrogEl.style.top) < -750) {
            greenFrogEl.style.left = 300;
            greenFrogEl.style.top = 15;
            await death();
        }
        
        await sleep(100);    
    }
}

async function rideLog() {

    var onLogOne = false;
    var onLogTwo = false;
    var onLogThree = false;

    while(1) {

        while (parseFloat(greenFrogEl.style.top) < -590  && parseFloat(greenFrogEl.style.top) > -650 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(logOneEl.style.left)) + 300) < 50){
            greenFrogEl.style.left = parseFloat(greenFrogEl.style.left) - 5 + "px";
        }

        if (parseFloat(greenFrogEl.style.top) < -570  && parseFloat(greenFrogEl.style.top) > -670 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(logOneEl.style.left)) + 300) < 70) {
            onLogOne = true;
        }

        if (!(parseFloat(greenFrogEl.style.top) < -570  && parseFloat(greenFrogEl.style.top) > -670 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(logOneEl.style.left)) + 300) < 70)) {
            onLogOne = false;
        }

        while (parseFloat(greenFrogEl.style.top) < -515  && parseFloat(greenFrogEl.style.top) > -570 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(logTwoEl.style.left)) + 300) < 50){
            greenFrogEl.style.left = parseFloat(greenFrogEl.style.left) + 5 + "px";
        }

        if (parseFloat(greenFrogEl.style.top) < -495  && parseFloat(greenFrogEl.style.top) > -590 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(logTwoEl.style.left)) + 300) < 70) {
            onLogTwo = true;
        }

        if (!(parseFloat(greenFrogEl.style.top) < -495  && parseFloat(greenFrogEl.style.top) > -590 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(logTwoEl.style.left)) + 300) < 70)) {
            onLogTwo = false;
        }

        while (parseFloat(greenFrogEl.style.top) < -450  && parseFloat(greenFrogEl.style.top) > -515 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(logThreeEl.style.left)) + 300) < 50){
            greenFrogEl.style.left = parseFloat(greenFrogEl.style.left) - 15 + "px";
        }

        if (parseFloat(greenFrogEl.style.top) < -410  && parseFloat(greenFrogEl.style.top) > -535 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(logThreeEl.style.left)) + 300) < 70) {
            onLogThree = true;
        }

        if (!(parseFloat(greenFrogEl.style.top) < -410  && parseFloat(greenFrogEl.style.top) > -535 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(logThreeEl.style.left)) + 300) < 70)) {
            onLogThree = false;
        }
        
        if (parseFloat(greenFrogEl.style.top) > -650 && parseFloat(greenFrogEl.style.top) < -460 && onLogOne === false && onLogTwo === false && onLogThree === false) {
            greenFrogEl.style.left = 300;
            greenFrogEl.style.top = 15;
            await drown();
        }
    
        await sleep(100);
    }
}

async function hitBarrier() {

    while (1) {

        if ((parseFloat(greenFrogEl.style.top) < -200 && parseFloat(greenFrogEl.style.top) > -330) 
        && (parseFloat(greenFrogEl.style.left) > 300 && parseFloat(greenFrogEl.style.left) < 330)){
            greenFrogEl.style.left = 300;
        }
        if ((parseFloat(greenFrogEl.style.top) < -200 && parseFloat(greenFrogEl.style.top) > -330) 
        && (parseFloat(greenFrogEl.style.left) > 455 && parseFloat(greenFrogEl.style.left) < 485)) {
            greenFrogEl.style.left = 485;
        }
        if ((parseFloat(greenFrogEl.style.top) < -300 && parseFloat(greenFrogEl.style.top) > -330) 
        && (parseFloat(greenFrogEl.style.left) > 300 && parseFloat(greenFrogEl.style.left) < 485)) {
            greenFrogEl.style.top = -330;
        }
        if ((parseFloat(greenFrogEl.style.top) < -200 && parseFloat(greenFrogEl.style.top) > -230) 
        && (parseFloat(greenFrogEl.style.left) > 300 && parseFloat(greenFrogEl.style.left) < 485)) {
            greenFrogEl.style.top = -200;
        }

        if ((parseFloat(greenFrogEl.style.top) < -200 && parseFloat(greenFrogEl.style.top) > -330) 
        && (parseFloat(greenFrogEl.style.left) > -170 && parseFloat(greenFrogEl.style.left) < -140)){
            greenFrogEl.style.left = -170;
        }

        if ((parseFloat(greenFrogEl.style.top) < -200 && parseFloat(greenFrogEl.style.top) > -330) 
        && (parseFloat(greenFrogEl.style.left) > -5 && parseFloat(greenFrogEl.style.left) < 25)) {
            greenFrogEl.style.left = 25;
        }

        if ((parseFloat(greenFrogEl.style.top) < -300 && parseFloat(greenFrogEl.style.top) > -330) 
        && (parseFloat(greenFrogEl.style.left) > -140 && parseFloat(greenFrogEl.style.left) < 25)) {
            greenFrogEl.style.top = -330;
        }

        if ((parseFloat(greenFrogEl.style.top) < -200 && parseFloat(greenFrogEl.style.top) > -230) 
        && (parseFloat(greenFrogEl.style.left) > -140 && parseFloat(greenFrogEl.style.left) < 25)) {
            greenFrogEl.style.top = -200;
        }

        if ((parseFloat(greenFrogEl.style.top) < -200 && parseFloat(greenFrogEl.style.top) > -330) 
        && (parseFloat(greenFrogEl.style.left) > 825 && parseFloat(greenFrogEl.style.left) < 855)){
            greenFrogEl.style.left = 825;
        }

        if ((parseFloat(greenFrogEl.style.top) < -200 && parseFloat(greenFrogEl.style.top) > -330) 
        && (parseFloat(greenFrogEl.style.left) > 995 && parseFloat(greenFrogEl.style.left) < 1025)) {
            greenFrogEl.style.left = 1025;
        }

        if ((parseFloat(greenFrogEl.style.top) < -300 && parseFloat(greenFrogEl.style.top) > -330) 
        && (parseFloat(greenFrogEl.style.left) > 825 && parseFloat(greenFrogEl.style.left) < 1025)) {
            greenFrogEl.style.top = -330;
        }
        if ((parseFloat(greenFrogEl.style.top) < -200 && parseFloat(greenFrogEl.style.top) > -230) 
        && (parseFloat(greenFrogEl.style.left) > 825 && parseFloat(greenFrogEl.style.left) < 1025)) {
            greenFrogEl.style.top = -200;
        }

        await sleep(100)
    }
}

const deathEl = document.getElementById("deathScreen");
const drownEl = document.getElementById("drownScreen");
const winEl = document.getElementById("winScreen");

async function death() {

    deathEl.style.display = "block";
    await sleep(100)
    deathEl.style.display = "none";
}

async function drown() {

    drownEl.style.display = "block";
    await sleep(100)
    drownEl.style.display = "none";
}

async function win() {

    winEl.style.display = "block";
    await sleep(500);
    winEl.style.display = "none";

}

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
        this.displayMsg('system', 'game', "Good luck!");
    };
    this.socket.onclose = (event) => {
        this.displayMsg('system', 'game', 'disconnected');
    };
    this.socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
        if (msg.type === GameEndEvent) {
          this.displayMsg('player', msg.from, `won the game!`);
      };
    }
}

function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#liveChat');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }

document.addEventListener("load", () => {
    truckEl.style.left = parseFloat(truckEl.style.left || 0) - 1000 + "px";
});
