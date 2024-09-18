let coin = document.getElementById("flip-coin");
let flip = document.getElementById("flip-again");
let resetEl = document.getElementById("reset");
let tossResult = document.getElementById("result");

let stats = document.getElementById("stats");

coin.addEventListener("click", function () {
   
    flipCoin();
    reset()
});


 let tails = 0;                                                 
 let heads = 0;

function flipCoin ( ){
   
    let tailsE = document.getElementById("tail");
    let headsE = document.getElementById("head");
    let totalE = document.getElementById("total");
    let repetions = document.getElementById("coinFlips").value;

    let result;
    //console.log(tails);
    for (let i = 0; i < repetions ; i++) {
   
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
       
        
        let tailsPerc = Math.round(tails/total * 100);
        let headsPerc = Math.round(heads/total * 100);

        if(repetions == 1 )
            tossResult.innerHTML = `It's ${result} `;
        else tossResult.innerHTML = ``;
        headsE.innerHTML = `Heads: ${heads} ${headsPerc}%`;
        tailsE.innerHTML = `Tails: ${tails}  ${tailsPerc}%`;
        totalE.innerHTML = `Total: ${total} `; 
        flip.innerHTML = `<button id="flip-again-btn">Want to Flip Again?</button>`;
        resetEl.innerHTML = `<button id="reset-btn"  onclick="reset()" >Reset</button>`;
        flip.addEventListener("click", flipCoin); 
    }
}

//implement statistic graphs
function reset () {
    tails = 0;                                                 
    heads = 0;
    //stats.innerHTML = ``;
}
