

const greenFrogEl = document.getElementById("frogID");
//const greenFrogEl = document.querySelector("#frog-body");

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
});


const truckEl = document.querySelector("#truck-body");

function driveRight() {

}

function driveLeft() {
    
    //truckEl.style.left = parseFloat(truckEl.style.left || 0) - 1000 + "px";
    console.log("testing");
    truckEl.style.background = 'blue';

}

/*document.addEventListener("load", () => {

    truckEl.style.left = parseFloat(truckEl.style.left || 0) - 1000 + "px";

});
