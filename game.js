let userAlive = true;

const greenFrogEl = document.getElementById("frogID");

document.addEventListener("keydown", (e) => {

    if (e.key === "a") {

        greenFrogEl.style.left = parseFloat(greenFrogEl.style.left || 0) - 5 + 'px';
        
    }
    else if (e.key === "w") {

        greenFrogEl.style.top = parseFloat(greenFrogEl.style.top || 0) - 5 + 'px';
        
    }
    else if (e.key === "s") {

        greenFrogEl.style.top = parseFloat(greenFrogEl.style.top || 0) + 5 + "px";

    }
    else if (e.key === "d") {


        greenFrogEl.style.left = parseFloat(greenFrogEl.style.left || 0) + 5 + "px";

    }
    else if (e.key === "q") {
        userAlive = false;
    }

});

const flyOneEl = document.getElementById("fly");
const flyTwoEl = document.getElementById("fly2");
const flyThreeEl = document.getElementById("fly3");
const flyFourEl = document.getElementById("fly4");
const flyFiveEl = document.getElementById("fly5");

async function eatFly() {

    while (1) {

        if ((flyOneEl.style.visibility === 'hidden') && (flyTwoEl.style.visibility === 'hidden') &&
         (flyThreeEl.style.visibility === 'hidden') && (flyFourEl.style.visibility === 'hidden') && (flyFiveEl.style.visibility === 'hidden'))
         {
            flyOneEl.style.visibility = 'visible';
            flyTwoEl.style.visibility = 'visible';
            flyThreeEl.style.visibility = 'visible';
            flyFourEl.style.visibility = 'visible';
            flyFiveEl.style.visibility = 'visible';
        }


        if (parseFloat(greenFrogEl.style.top || 0) < -640) {

            if ((parseFloat(greenFrogEl.style.left || 0) > -250) && ((parseFloat(greenFrogEl.style.left || 0) < -200))) {

                greenFrogEl.style.top = 10;
                flyOneEl.style.visibility = 'hidden';

            }

            if ((parseFloat(greenFrogEl.style.left || 0) > -15) && ((parseFloat(greenFrogEl.style.left || 0) < 55))) {

                greenFrogEl.style.top = 10;
                flyTwoEl.style.visibility = 'hidden';

            }

            if ((parseFloat(greenFrogEl.style.left || 0) > 300) && ((parseFloat(greenFrogEl.style.left || 0) < 350))) {

                greenFrogEl.style.top = 10;
                flyThreeEl.style.visibility = 'hidden';

            }

            if ((parseFloat(greenFrogEl.style.left || 0) > 600) && ((parseFloat(greenFrogEl.style.left || 0) < 650))) {

                greenFrogEl.style.top = 10;
                flyFourEl.style.visibility = 'hidden';

            }

            if ((parseFloat(greenFrogEl.style.left || 0) > 900) && ((parseFloat(greenFrogEl.style.left || 0) < 950))) {

                greenFrogEl.style.top = 10;
                flyFiveEl.style.visibility = 'hidden';

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
        }

        if ((parseFloat(greenFrogEl.style.top) < -290) && (parseFloat(greenFrogEl.style.top) > -385) &&
        (Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(carOneEl.style.left || 0)) - 90) < 40))
        {
            greenFrogEl.style.top = 15;
        }

        if (parseFloat(greenFrogEl.style.top) < -160  && parseFloat(greenFrogEl.style.top) > -235 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(truckTwoEl.style.left) + 600)) < 50){
            greenFrogEl.style.top = 15;
        }

        if ((parseFloat(greenFrogEl.style.top) < -80) && (parseFloat(greenFrogEl.style.top) > -170) &&
        (Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(carTwoEl.style.left || 0)) - 100) < 40))
        {
            greenFrogEl.style.top = 15;
        }

        if (parseFloat(greenFrogEl.style.top) < -10  && parseFloat(greenFrogEl.style.top) > -100 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(truckThreeEl.style.left) + 600)) < 50){
            greenFrogEl.style.top = 15;
        }

        if (parseFloat(greenFrogEl.style.left) < -400) {
            greenFrogEl.style.left = 300;
            greenFrogEl.style.top = 15;
        }

        if (parseFloat(greenFrogEl.style.left) > 1200) {
            greenFrogEl.style.left = 300;
            greenFrogEl.style.top = 15;
        }

        if (parseFloat(greenFrogEl.style.top) > 25) {
            greenFrogEl.style.left = 300;
            greenFrogEl.style.top = 15;
        }

        if (parseFloat(greenFrogEl.style.top) < -750) {
            greenFrogEl.style.left = 300;
            greenFrogEl.style.top = 15;
        }
        
        await sleep(100);
        
    }
}

async function rideLog() {

    while(1) {

        while (parseFloat(greenFrogEl.style.top) < -590  && parseFloat(greenFrogEl.style.top) > -650 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(logOneEl.style.left)) + 300) < 50){
            greenFrogEl.style.left = parseFloat(greenFrogEl.style.left) - 5 + "px";
        }

        while (parseFloat(greenFrogEl.style.top) < -515  && parseFloat(greenFrogEl.style.top) > -570 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(logTwoEl.style.left)) + 300) < 50){
            greenFrogEl.style.left = parseFloat(greenFrogEl.style.left) + 5 + "px";
        }

        while (parseFloat(greenFrogEl.style.top) < -460  && parseFloat(greenFrogEl.style.top) > -515 && Math.abs(parseFloat(greenFrogEl.style.left) - (parseFloat(logThreeEl.style.left)) + 300) < 50){
            greenFrogEl.style.left = parseFloat(greenFrogEl.style.left) - 15 + "px";
        }
    
        await sleep(100);

    }
}


document.addEventListener("load", () => {

    truckEl.style.left = parseFloat(truckEl.style.left || 0) - 1000 + "px";

});
