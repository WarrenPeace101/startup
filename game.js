
const greenFrogEl = document.querySelector("#frog-body");

document.addEventListener("keydown", (e) => {

    if (e.key === "a") {

        greenFrogEl.style.left = parseFloat(greenFrogEl.style.left) + 1 + 'vw';
    }
    else if (e.key === "w") {

        greenFrogEl.style.top = parseFloat(greenFrogEl.style.top) - 5 + 'px';
        
    }
    else if (e.key === "s") {

        greenFrogEl.style.top = parseFloat(greenFrogEl.style.top || 0) + 5 + "px";

    }
    else if (e.key === "d") {

        greenFrogEl.style.right = parseFloat(greenFrogEl.style.right || 0) - 5 + "px";

    }

});

const truckEl = document.querySelector("#truck-body");

document.addEventListener("load", () => {

    truckEl.style.left = parseFloat(truckEl.style.left || 0) - 1000 + "px";

});
