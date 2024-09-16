let coin = document.getElementById("flip-coin");
let flip = document.getElementById("flip-again");
let tossResult = document.getElementById("result");


coin.addEventListener("click", function () {
   
    flipCoin();
});

let tails =0  ;                                                 
let heads = 0;

function flipCoin (){
    let tailsE = document.getElementById("tail");
    let headsE = document.getElementById("head");
    let totalE = document.getElementById("total");
    let repetions = document.getElementById("coinFlips").value;

    let result;
    console.log(repetions);
    for (let i = 0; i < repetions ; i++) {
    //for (let i = 0; i < 10 ; i++) {
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
        //create update html function
        //add stats for tails and heads
        let tailsPerc = Math.round(tails/total * 100);
        let headsPerc = Math.round(heads/total * 100);

        tossResult.innerHTML = `It's ${result} `;
        headsE.innerHTML = `Heads: ${heads} ${headsPerc}%`;
        tailsE.innerHTML = `Tails: ${tails}  ${tailsPerc}%`;
        totalE.innerHTML = `Total: ${total} `; 
        flip.innerHTML = `<button id="flip-again-btn">Want to Flip Again?</button>`
        flip.addEventListener("click", flipCoin); 
    }
}