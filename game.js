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

const truckEl = document.getElementByID("#truckID");

function driveRight() {

}

async function driveLeft() {

    for (let i = 0; i < 10; i++) {

        truckEl.style.left = parseFloat(truckEl.style.left || 0) - 5 + "px";
        
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

document.addEventListener("load", () => {

    truckEl.style.left = parseFloat(truckEl.style.left || 0) - 1000 + "px";

});
