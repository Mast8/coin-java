let coin = document.getElementById("flip-coin");
let flip = document.getElementById("flip-again");
let tossResult = document.getElementById("result");

/* function flipAgain() {
    location.reload();
} */

coin.addEventListener("click", function () {
    //let toss = Math.floor(Math.random() * 2);
    flipCoin();
    /* let result;
    let tails, heads = 0;
    
    if (toss == 1) {
        tails++;
        result = "Tails";
        coin.src = "images/Tails.png"
    } else {
        heads++;
        coin.src = "images/Heads.png"
        result = "Heads";
    }

    tossResult.innerHTML = `It's ${result}.  ${tails} and ${heads} `
    flip.innerHTML = `<button id="flip-again-btn">Want to Flip Again?</button>`
    flip.addEventListener("click", flipAgain); */
});

let tails =0  ;                                                 
let heads = 0;

function flipCoin (){
    let result;
    let toss = Math.floor(Math.random() * 2);
    
    if (toss == 1) {
        tails++;
        result = "Tails";
        coin.src = "images/Tails.png"
    } else {
        heads++;
        coin.src = "images/Heads.png"
        result = "Heads";
    }
    let total = heads +tails;

    tossResult.innerHTML = `It's ${result}. Heads: ${tails} Tails: ${heads} total ${total} `
    flip.innerHTML = `<button id="flip-again-btn">Want to Flip Again?</button>`
    flip.addEventListener("click", flipCoin); 
}