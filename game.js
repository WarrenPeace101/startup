
const greenFrogEl = document.querySelector(".greenFrog");

window.addEventListener("keydown", moveFrog(e));

function moveFrog(e) {

    if (e.key === "a") {

        greenFrogEl.style.left = parseInt(greenFrogEl.style.left) - 5 + "px";

    }
    else if (e.key === "w") {

        greenFrogEl.style.top = parseInt(greenFrogEl.style.top) - 5 + "px";
        

    }
    else if (e.key === "s") {

        greenFrogEl.style.bottom = parseInt(greenFrogEl.style.left) - 5 + "px";

    }
    else if (e.key === "d") {

        greenFrogEl.style.right = parseInt(greenFrogEl.style.right) - 5 + "px";

    }

}