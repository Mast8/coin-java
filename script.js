let coin = document.getElementById("flip-coin");
let flip = document.getElementById("flip-again");
let toss = Math.floor(Math.random() * 2);
let tossResult = document.getElementById("result");

function flipAgain() {
    location.reload();
}

coin.addEventListener("click", function () {
    let result;

    if (toss == 1) {
        result = "Tails";
        coin.src = "images/Tails.png"
    } else {
        coin.src = "images/Heads.png"
        result = "Heads";
    }
    tossResult.innerHTML = `It's ${result}.`
    flip.innerHTML = `<button id="flip-again-btn">Want to Flip Again?</button>`
    flip.addEventListener("click", flipAgain);
});
