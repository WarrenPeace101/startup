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

document.addEventListener("load", () => {

    truckEl.style.left = parseFloat(truckEl.style.left || 0) - 1000 + "px";

});
